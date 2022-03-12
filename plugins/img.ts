import createHmac from 'create-hmac'
import { encodeURI } from 'js-base64'
import { Buffer } from 'buffer/index.js'
import { OperationGeneratorConfig, OperationMapper } from '~/types/image'
import { joinURL, withBase } from 'ufo'

export default defineNuxtPlugin(({ $config }) => {
  return {
    provide: {
      img: (src: string, modifiers = {}): string => {
        const key = $config.IMGPROXY_KEY
        const salt = $config.IMGPROXY_SALT
        const hexDecode = (hex: string) => Buffer.from(hex, 'hex')

        function createMapper(map: Record<string, string>): OperationMapper {
          return (key?: string) => {
            return key ? map[key] ?? key : map.missingValue
          }
        }

        function createOperationsGenerator({
          formatter,
          keyMap,
          joinWith = '/',
          valueMap,
        }: OperationGeneratorConfig = {}) {
          if (!formatter) {
            formatter = (key, value: string) => `${key}=${value}`
          }
          if (keyMap && typeof keyMap !== 'function') {
            keyMap = createMapper(keyMap)
          }
          const map = valueMap ?? {}
          Object.keys(map).forEach((valueKey) => {
            if (typeof map[valueKey] !== 'function') {
              map[valueKey] = createMapper(map[valueKey])
            }
          })

          return (modifiers: { [key: string]: string } = {}) => {
            const operations = Object.entries(modifiers)
              .filter(([_, value]) => typeof value !== 'undefined')
              .map(([key, value]) => {
                const mapper = map[key]
                if (typeof mapper === 'function') {
                  value = mapper(modifiers[key])
                }

                key = typeof keyMap === 'function' ? keyMap(key) : key

                return formatter?.(key, value)
              })

            return operations.join(joinWith)
          }
        }

        const sign = (salt: string, target: string, secret: string) => {
          const hmac = createHmac('sha256', hexDecode(secret))
          hmac.update(hexDecode(salt))
          hmac.update(target)
          return encodeURI(hmac.digest())
        }

        const operationsGenerator = createOperationsGenerator({
          keyMap: {
            resize: 'rs',
            size: 's',
            fit: 'rt',
            width: 'w',
            height: 'h',
            dpr: 'dpr',
            enlarge: 'el',
            extend: 'ex',
            gravity: 'g',
            crop: 'c',
            padding: 'pd',
            trim: 't',
            rotate: 'rot',
            quality: 'q',
            maxBytes: 'mb',
            background: 'bg',
            backgroundAlpha: 'bga',
            blur: 'bl',
            sharpen: 'sh',
            watermark: 'wm',
            preset: 'pr',
            cacheBuster: 'cb',
            stripMetadata: 'sm',
            stripColorProfile: 'scp',
            autoRotate: 'ar',
            filename: 'fn',
            format: 'f',
          },
          formatter: (key, value) => `${key}:${value}`,
        })

        const encodedUrl = encodeURI(src)
        const path = joinURL('/', operationsGenerator(modifiers), encodedUrl)

        const signature = sign(salt, path, key)
        const baseURL = 'https://imgproxy.daim.dev'
        return withBase(joinURL(signature, path), baseURL)
      },
    },
  }
})

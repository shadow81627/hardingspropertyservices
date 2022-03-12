import createHmac from 'create-hmac'
// import { encodeURI } from 'js-base64'

export default defineNuxtPlugin(({ $config }) => {
  return {
    provide: {
      img: (url: string, modifiers = {}): string => {
        const key = $config.IMGPROXY_KEY
        const salt = $config.IMGPROXY_SALT
        const hexDecode = (hex: string) => Buffer.from(hex, 'hex')

        function urlSafeBase64(value: Buffer | string) {
          return Buffer.from(value)
            .toString('base64')
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
        }

        const sign = (salt: string, target: string, secret: string) => {
          const hmac = createHmac('sha256', hexDecode(secret))
          hmac.update(hexDecode(salt))
          hmac.update(target)
          return urlSafeBase64(hmac.digest())
        }

        const resizing_type = 'fill'
        const width = 300
        const height = 300
        const gravity = 'no'
        const enlarge = 1
        const extension = 'png'
        const encoded_url = urlSafeBase64(url)
        const path = `/rs:${resizing_type}:${width}:${height}:${enlarge}/g:${gravity}/${encoded_url}.${extension}`

        const signature = sign(salt, path, key)
        const baseURL = 'https://imgproxy.daim.dev'
        const result = `${baseURL}/${signature}${path}`
        return result
      },
    },
  }
})

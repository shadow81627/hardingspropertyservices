<template>
  <picture :key="nSources[0].src">
    <source
      v-if="nSources[1]"
      :type="nSources[1].type"
      :srcset="nSources[1].srcset"
      :sizes="nSources[1].sizes"
    />
    <img
      v-bind="{ ...nImgAttrs, ...imgAttrs, ...$attrs }"
      :src="nSources[0].src"
      :srcset="nSources[0].srcset"
      :sizes="nSources[0].sizes"
      xv-on="$listeners"
    />
  </picture>
</template>

<script lang="ts">
import type { DefineComponentWithMixin } from '~/types/vue'
import type { ImageSizesOptions } from '~/types'
import { imageMixin } from '~/mixins/image.mixin'

const screens: Record<string, number> = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
  '2xl': 1536,
}

const defineComponent: DefineComponentWithMixin = (opts: any) => opts

export default defineComponent({
  name: 'Picture',
  mixins: [imageMixin],
  inheritAttrs: false,
  props: {
    legacyFormat: { type: String, default: null },
    imgAttrs: { type: Object, default: null },
  },
  head() {
    if (this.preload === true) {
      const srcKey = typeof this.nSources[1] !== 'undefined' ? 1 : 0
      const link = {
        rel: 'preload',
        as: 'image',
        imagesrcset: this.nSources[srcKey].srcset,
      }
      if (typeof this.nSources[srcKey].sizes !== 'undefined') {
        link.imagesizes = this.nSources[srcKey].sizes
      }
      return {
        link: [link],
      }
    } else {
      return {}
    }
  },
  computed: {
    isTransparent(): boolean {
      return ['png', 'webp', 'gif'].includes(this.originalFormat)
    },
    originalFormat(): string {
      return this.getFileExtension(this.src)
    },
    nFormat(): string {
      if (this.format) {
        return this.format
      }
      if (this.originalFormat === 'svg') {
        return 'svg'
      }
      return 'webp'
    },
    nLegacyFormat(): string {
      if (this.legacyFormat) {
        return this.legacyFormat
      }
      const formats: Record<string, string> = {
        webp: this.isTransparent ? 'png' : 'jpeg',
        svg: 'png',
      }
      return formats[this.nFormat] || this.originalFormat
    },
    nSources(): Array<{
      srcset: string
      src?: string
      type?: string
      sizes?: string
    }> {
      if (this.nFormat === 'svg') {
        return [
          {
            srcset: this.src,
          },
        ]
      }

      const formats =
        this.nLegacyFormat !== this.nFormat
          ? [this.nLegacyFormat, this.nFormat]
          : [this.nFormat]

      const sources = formats.map((format) => {
        const { srcset, sizes, src } = this.getSizes(this.src, {
          ...this.nOptions,
          sizes: this.sizes ?? screens,
          modifiers: {
            ...this.nModifiers,
            format,
          },
        })

        return {
          src,
          type: `image/${format}`,
          sizes,
          srcset,
        }
      })

      return sources
    },
  },
  created() {
    if (process.server && process.static) {
      // Force compute sources into ssrContext
      // eslint-disable-next-line no-unused-expressions
      this.nSources
    }
  },
  methods: {
    getFileExtension(url = '') {
      const extension = url
        .split(/[?#]/)
        .shift()!
        .split('/')
        .pop()!
        .split('.')
        .pop()!
      return extension
    },
    parseSize(input: string | number | undefined = '') {
      if (typeof input === 'number') {
        return input
      }
      if (typeof input === 'string') {
        if (input.replace('px', '').match(/^\d+$/g)) {
          return parseInt(input, 10)
        }
      }
    },
    getSizes(input: string, opts: ImageSizesOptions) {
      const { $img } = useNuxtApp()
      const width = this.parseSize(opts.modifiers?.width)
      const height = this.parseSize(opts.modifiers?.height)
      const hwRatio = width && height ? height / width : 0
      const variants = []

      const sizes: Record<string, string> = {}

      // string => object
      if (typeof opts.sizes === 'string') {
        for (const entry of opts.sizes.split(/[\s,]+/).filter((e) => e)) {
          const s = entry.split(':')
          if (s.length !== 2) {
            continue
          }
          sizes[s[0].trim()] = s[1].trim()
        }
      } else {
        Object.assign(sizes, opts.sizes)
      }

      for (const key in sizes) {
        const screenMaxWidth = (screens && screens[key]) || parseInt(key)
        let size = String(sizes[key])
        const isFluid = size.endsWith('vw')
        if (!isFluid && /^\d+$/.test(size)) {
          size = size + 'px'
        }
        if (!isFluid && !size.endsWith('px')) {
          continue
        }
        let _cWidth = parseInt(size)
        if (!screenMaxWidth || !_cWidth) {
          continue
        }
        if (isFluid) {
          _cWidth = Math.round((_cWidth / 100) * screenMaxWidth)
        }
        const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height
        variants.push({
          width: _cWidth,
          size,
          screenMaxWidth,
          media: `(max-width: ${screenMaxWidth}px)`,
          src: $img?.(
            input,
            { ...opts.modifiers, width: _cWidth, height: _cHeight },
            opts,
          ),
        })
      }

      variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth)

      const defaultVar = variants[variants.length - 1]
      if (defaultVar) {
        defaultVar.media = ''
      }

      return {
        sizes: variants
          .map((v) => `${v.media ? v.media + ' ' : ''}${v.size}`)
          .join(', '),
        srcset: variants.map((v) => `${v.src} ${v.width}w`).join(', '),
        src: defaultVar?.src,
      }
    },
  },
})
</script>

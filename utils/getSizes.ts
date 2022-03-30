import type { ImageSizesOptions } from '~/types'
import parseSize from '~/utils/parseSize'
import screens from '~/utils/screens'

export default function getSizes(input: string, opts: ImageSizesOptions) {
  const { $img } = useNuxtApp()
  const width = parseSize(opts.modifiers?.width)
  const height = parseSize(opts.modifiers?.height)
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
}

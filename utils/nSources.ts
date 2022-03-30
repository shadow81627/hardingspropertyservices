import { ImageOptions } from '~/types'
import getSizes from './getSizes'
import screens from './screens'
import nLegacyFormat from './nLegacyFormat'
import nFormat from './nFormat'

interface NSourceOptions {
  src: string
  nOptions: ImageOptions
  nModifiers?: ImageOptions['modifiers']
  sizes?: ImageOptions['sizes']
}

export default function nSources(args: NSourceOptions): Array<{
  srcset: string
  src?: string
  type?: string
  sizes?: string
}> {
  const format = nFormat({ src: args.src })
  const legacyFormat = nLegacyFormat({ src: args.src })
  if (format === 'svg') {
    return [
      {
        srcset: args.src,
      },
    ]
  }

  const formats = legacyFormat !== format ? [legacyFormat, format] : [format]

  const sources = formats.map((format) => {
    const { srcset, sizes, src } = getSizes(args.src, {
      ...args.nOptions,
      sizes: args.sizes ?? screens,
      modifiers: {
        ...args.nModifiers,
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
}

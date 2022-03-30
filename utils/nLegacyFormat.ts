interface legacyFormatOptions {
  legacyFormat?: string
  src: string
}

import originalFormat from './originalFormat'
import nFormat from './nFormat'
import isTransparent from './isTransparent'

export default function nLegacyFormat(args: legacyFormatOptions): string {
  const { src } = args
  if (args.legacyFormat) {
    return args.legacyFormat
  }
  const formats: Record<string, string> = {
    webp: isTransparent(src) ? 'png' : 'jpeg',
    svg: 'png',
  }
  return formats[nFormat({ src })] || originalFormat(src)
}

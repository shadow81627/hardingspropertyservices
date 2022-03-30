import originalFormat from './originalFormat'

interface nFormatOptions {
  format?: string
  src: string
}

export default function nFormat(args: nFormatOptions): string {
  if (args.format) {
    return args.format
  }
  if (originalFormat(args.src) === 'svg') {
    return 'svg'
  }
  return 'webp'
}

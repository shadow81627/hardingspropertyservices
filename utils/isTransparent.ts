import originalFormat from './originalFormat'

export default function isTransparent(src: string): boolean {
  return ['png', 'webp', 'gif'].includes(originalFormat(src))
}

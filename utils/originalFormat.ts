import getFileExtension from './getFileExtension'

export default function originalFormat(src: string): string {
  return getFileExtension(src)
}

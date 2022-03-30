export default function getFileExtension(url = '') {
  const extension = url
    .split(/[?#]/)
    .shift()!
    .split('/')
    .pop()!
    .split('.')
    .pop()!
  return extension
}

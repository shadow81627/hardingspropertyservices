export default function parseSize(input: string | number | undefined = '') {
  if (typeof input === 'number') {
    return input
  }
  if (typeof input === 'string') {
    if (input.replace('px', '').match(/^\d+$/g)) {
      return parseInt(input, 10)
    }
  }
}

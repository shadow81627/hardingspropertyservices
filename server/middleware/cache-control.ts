import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
  const staticContent = req.url?.includes('/_nuxt/')
  if (staticContent) {
    res.setHeader('Cache-Control', 'public, max-age=31557600, immutable')
  } else {
    res.setHeader(
      'Cache-Control',
      'max-age=1, stale-while-revalidate=86400, stale-if-error=86400',
    )
  }
}

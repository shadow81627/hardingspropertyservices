const WARN = 'warn'

module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        // 'http://localhost:3000/404.html'
      ],
      startServerCommand: 'npm run start',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'unused-javascript': WARN,
        'unused-css-rules': WARN,
        'non-composited-animations': WARN,
        'errors-in-console': WARN,
        'canonical': WARN,
        'valid-source-maps': WARN,
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}

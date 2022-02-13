import { defineNuxtConfig } from 'nuxt3'

const APP_NAME = 'Harding\'s Property Services'

export default defineNuxtConfig({
  publicRuntimeConfig: { APP_NAME },
  meta: {
    title: APP_NAME,
    meta: [
      { name: 'description', content: APP_NAME },
      { name: 'apple-mobile-web-app-status-bar', content: 'black' },
      { name: 'theme-color', content: 'black' },
    ],
    link: [
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  buildModules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
  },
})

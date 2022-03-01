import { defineNuxtConfig } from 'nuxt3'

const APP_NAME = 'Harding\'s Property Services'

export default defineNuxtConfig({
  publicRuntimeConfig: {
    APP_NAME,
    STRAPI_URL: process.env.STRAPI_URL ?? 'https://strapi.daim.dev',
    plausible: {
      domain: process.env.PLAUSIBLE_DOMAIN ?? 'www.hardingspropertyservices.com',
      apiHost: process.env.PLAUSIBLE_API_HOST ?? 'https://plausible.daim.dev',
    },
  },
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
      { rel: 'og:image', href: '/img/273439411_105620025378754_932846106177531871_n.jpg' },
    ],
  },
  modules: [
    'vue-plausible',
    '@formkit/nuxt',
  ],
  buildModules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/strapi',
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

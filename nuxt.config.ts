import { defineNuxtConfig } from 'nuxt3'
import { withBase } from 'ufo'

const APP_NAME = "Harding's Property Services"
const BASE_URL = process.env.BASE_URL ?? "https://www.hardingspropertyservices.com/"
const CDN_URL = process.env.CDN_URL ?? BASE_URL

export default defineNuxtConfig({
  publicRuntimeConfig: {
    APP_NAME,
    STRAPI_URL: process.env.STRAPI_URL ?? 'https://strapi.daim.dev',
    plausible: {
      domain:
        process.env.PLAUSIBLE_DOMAIN ?? 'www.hardingspropertyservices.com',
      apiHost: process.env.PLAUSIBLE_API_HOST ?? 'https://plausible.daim.dev',
    },
    IMGPROXY_KEY: process.env.IMGPROXY_KEY,
    IMGPROXY_SALT: process.env.IMGPROXY_SALT,
  },
  meta: {
    title: APP_NAME,
    meta: [
      { name: 'description', content: APP_NAME },
      { name: 'apple-mobile-web-app-status-bar', content: 'black' },
      { name: 'theme-color', content: 'black' },
      {property: 'og:image',content: withBase('/hardings-property-1200x600.png', CDN_URL)},
      {property: 'og:image:type',content: 'image/png'},
      {property: 'og:image:width',content: '1200'},
      {property: 'og:image:height',content: '600'},
      {property: 'og:image:alt',content: "Harding's Property Services"},
    ],
    link: [
      { rel: 'manifest', href: withBase('/manifest.json', CDN_URL) },
      { rel: 'icon', type: 'image/x-icon', href: withBase('/favicon.ico', CDN_URL) },
      { rel: 'apple-touch-icon', type: 'image/png', href: withBase('/apple-touch-icon.png', CDN_URL) },
    ],
  },
  modules: ['vue-plausible', '@formkit/nuxt'],
  buildModules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    // '@nuxtjs/strapi',
    'nuxt-lodash',
  ],
  vite: {
    build: {
      sourcemap: true,
      // target: 'es2015',
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    webFonts: {
      fonts: { brand: 'Alfa Slab One' }
    },
    icons: {
      scale: 1.2,
    },
    theme: {
      colors: {
        primary: '#6a3e1e',
      },
    },
    shortcuts: [
      [
        'btn',
        'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
      ],
    ],
  },
})

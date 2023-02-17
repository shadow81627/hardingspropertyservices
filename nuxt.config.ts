import { defineNuxtConfig } from 'nuxt/config'

const APP_NAME = "Harding's Property Services"
const BASE_URL =
  process.env.BASE_URL ?? 'https://www.hardingspropertyservices.com/'
const CDN_URL = process.env.CDN_URL ?? BASE_URL

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      APP_NAME,
      CDN_URL,
      BASE_URL,
      STRAPI_URL: process.env.STRAPI_URL ?? 'https://strapi.daim.dev',
      plausible: {
        domain:
          process.env.PLAUSIBLE_DOMAIN ?? 'www.hardingspropertyservices.com',
        apiHost: process.env.PLAUSIBLE_API_HOST ?? 'https://plausible.daim.dev',
      },
      IMGPROXY_KEY: process.env.IMGPROXY_KEY,
      IMGPROXY_SALT: process.env.IMGPROXY_SALT,
    },
  },
  modules: [
    '@nuxtjs/plausible',
    '@formkit/nuxt',
    // '@nuxtjs/sitemap',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    // '@nuxtjs/strapi',
    'nuxt-lodash',
  ],
  // sitemap: {
  //   hostname: BASE_URL,
  //   routes: ['/', '/contact', '/gallery'],
  //   // i18n: 'en',
  //   xslUrl: '/sitemap.xsl',
  // },
  image: {
    // baseUrl: CDN_URL,
    // provider: 'imgproxy',
    domains: [
      'images.unsplash.com',
      's3.ap-northeast-2.wasabisys.com',
      'imgproxy.daim.dev',
    ],
    providers: {
      imgproxy: {
        provider: '~/utils/imgproxy',
        options: {
          key: process.env.IMGPROXY_KEY,
          salt: process.env.IMGPROXY_SALT,
        },
      },
      cloudflare: {
        baseURL: CDN_URL,
      },
    },
  },
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
      fonts: {
        brand: [
          { name: 'Alfa Slab One' },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
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
      {
        'section-bg': `rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300`,
      },
    ],
  },
})

// import Toucan from 'toucan-js';
// import { createRouter } from "vue-router";
import * as Sentry from '@sentry/vue'
// import { BrowserTracing } from "@sentry/tracing";

export default defineNuxtPlugin((nuxtApp) => {
  Sentry.init({
    app: nuxtApp.vueApp,
    dsn: 'https://980405b334ef4025bb2cee8da9787b61@o239887.ingest.sentry.io/6268262',
    // integrations: [
    //   new BrowserTracing({
    //     routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    //   }),
    // ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })
})

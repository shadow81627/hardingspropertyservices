<template>
  <Html lang="en-AU">
    <!-- <Script type="application/ld+json" :children="jsonLD" /> -->
    <div id="bg">
      <Picture
        :src="backgroundImage"
        alt=""
        sizes="sm:100vw md:100vw lg:100vw"
      ></Picture>
    </div>
    <div class="min-h-screen flex flex-col justify-between body">
      <Navigation />
      <main class="px-10 mb-auto">
        <NuxtPage />
      </main>
      <footer>
        <SocialLinks />
        <div class="text-center lg:text-left">
          <div class="text-center p-6">
            <small>
              <a href="https://daim.dev" target="__blank"
                >Site by Damien Robinson</a
              >
            </small>
          </div>
        </div>
      </footer>
    </div>
  </Html>
</template>

<script lang="ts">
export default {
  setup() {
    const config = useRuntimeConfig()
    const backgroundImage =
      'https://s3.ap-northeast-2.wasabisys.com/strapi.daim.dev/strapi.daim.dev/magdalena_w_P7_QAK_Mwl_G4_unsplash_45e919d1b5.jpg?updated_at=2022-03-29T22:20:37.965Z'
    const jsonLD = JSON.stringify({
      '@context': 'https://schema.org/',
      '@type': 'Service',
      serviceType: 'Handyman',
      provider: {
        '@type': 'LocalBusiness',
        name: config.APP_NAME,
        // 'telephone': '0487 950 940',
        url: 'https://hardingspropertyservices.com.au',
        sameAs: [
          'https://www.instagram.com/hardingspropertyservices/',
          'https://www.facebook.com/hardingspropertyservices',
        ],
      },
      areaServed: {
        '@type': 'City',
        name: ['Beaudesert', 'Kooralbyn'],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Property services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Property maintenance',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lawn mowing',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'General handyman services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Odd jobs',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Flat pack assembly',
            },
          },
        ],
      },
    })
    return { jsonLD, backgroundImage }
  },
}
</script>

<style>
@import '~/styles/main.css';

html.light .body {
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.1);
}
html.dark .body {
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
}

#bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: -10;
}
#bg img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
}
</style>

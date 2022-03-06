<template>
  <Html lang="en-AU">
    <!-- <Script type="application/ld+json" :children="jsonLD" /> -->
    <div class="min-h-screen flex flex-col justify-between">
      <Navigation />
      <main class="px-10 mb-auto">
        <NuxtPage />
        <Footer />
      </main>
      <footer class="text-center lg:text-left">
        <div class="text-center p-6">
          <small>
            <a href="https://daim.dev" target="__blank"
              >Site by Damien Robinson</a
            >
          </small>
        </div>
      </footer>
    </div>
  </Html>
</template>

<script setup>
const config = useRuntimeConfig()
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
return jsonLD
</script>

<style>
@import '~/styles/main.css';
</style>

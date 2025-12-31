<template>
  <section container py-2 mx-auto lg:pt-12 lg:px-32>
    <div
      flex
      flex-wrap
      justify-between
      gap-8
      text-left
      p-8
      mx-auto
      lg:py-12
      lg:px-32
      section-bg
      itemscope
      itemtype="https://schema.org/Service"
    >
      <meta itemprop="serviceType" content="Handyman" />
      <span
        style="display: none"
        itemprop="provider"
        itemscope
        itemtype="https://schema.org/LocalBusiness"
      >
        <span itemprop="name">Harding's Property Services</span>
        <span itemprop="telephone">0487 950 940</span>
        <a
          itemprop="image"
          href="https://hardingspropertyservices.com.au/hardings-property-1200x600.png"
          >Image</a
        >
        <a itemprop="url" href="https://hardingspropertyservices.com.au">
          <span>Website</span>
        </a>
        <a
          itemprop="sameAs"
          href="https://www.instagram.com/hardingspropertyservices/"
        >
          <span>Instagram</span>
        </a>
        <a
          itemprop="sameAs"
          href="https://www.facebook.com/hardingspropertyservices"
        >
          <span>Facebook</span>
        </a>
        <a itemprop="sameAs" href="https://g.co/kgs/X69CKJ">
          <span>Google</span>
        </a>
      </span>

      <div class="w-[65ch] text-pretty flex flex-col gap-4">
        <p>
          Wayne Harding has a lifelong passion for landscaping. He enjoys doing
          gardening in his own home, and has worked professionally in this area
          for over 30 years.
        </p>
        <p>
          After decades of working various building, mowing, turfing and
          hardware jobs, he has decided to use this knowledge to branch out and
          grow his own business.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <ul
          v-if="content"
          class="list-inside flex flex-col justify-between flex-wrap"
          itemprop="hasOfferCatalog"
          itemscope
          itemtype="https://schema.org/OfferCatalog"
        >
          <li
            v-for="service of content.services"
            :key="service.name"
            class="w-full md:w-auto"
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/Offer"
          >
            🌿
            <span
              itemprop="itemOffered"
              itemscope
              itemtype="https://schema.org/Service"
            >
              <span itemprop="name">{{ service.name }}</span>
            </span>
          </li>
        </ul>

        <p itemprop="areaServed" itemscope itemtype="https://schema.org/City">
          Servicing
          <span itemprop="name">Beaudesert</span> and surrounding areas.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  async setup() {
    return {
      content: {
        services: [
          { name: 'Lawn mowing' },
          { name: 'Rubbish removal' },
          { name: 'Gutter cleaning' },
        ],
      },
    }
  },
}
</script>

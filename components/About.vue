<template>
  <section container py-2 mx-auto lg:pt-12 lg:px-32>
    <div
      flex
      flex-wrap
      justify-between
      flex-col
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

      <div v-if="content" v-html="content.paragraph1"></div>

      <div class="pt-4">
        <p itemprop="areaServed" itemscope itemtype="https://schema.org/City">
          Wayne provides a range of property services to
          <span itemprop="name">Beaudesert</span> and surrounding areas:
        </p>
      </div>

      <ul
        v-if="content"
        class="list-disc list-inside py-2 flex justify-between flex-wrap"
        itemprop="hasOfferCatalog"
        itemscope
        itemtype="https://schema.org/OfferCatalog"
      >
        <li
          v-for="service of content.services"
          :key="service.name"
          class="md:px-2 py-2 flex-auto w-full md:w-auto"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/Offer"
        >
          <span
            itemprop="itemOffered"
            itemscope
            itemtype="https://schema.org/Service"
          >
            <span itemprop="name">{{ service.name }}</span>
          </span>
        </li>
      </ul>
      <div v-if="content" v-html="content.paragraph2"></div>
    </div>
  </section>
</template>

<script lang="ts">
import type { Strapi4Response } from '@nuxtjs/strapi'
import { marked } from 'marked'
export default {
  async setup() {
    const config = useRuntimeConfig()
    function transform(content: Strapi4Response) {
      try {
        const paragraph1 = marked.parse(content?.data?.attributes?.paragraph1)
        const paragraph2 = marked.parse(content?.data?.attributes?.paragraph2)
        const services = content?.data?.attributes?.services?.data.map(
          ({ attributes: { name } }) => ({
            name,
          }),
        )
        return {
          paragraph1,
          paragraph2,
          services,
        }
      } catch (error) {
        console.error(error)
      }
    }
    const { data: content } = await useFetch<Strapi4Response>('/api/about', {
      baseURL: config.STRAPI_URL,
      params: {
        'populate[0]': 'services',
        t: 1648607183585,
      },
      server: true,
      transform,
    })
    return {
      content: content ?? {},
    }
  },
}
</script>

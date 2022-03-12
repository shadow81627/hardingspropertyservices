<template>
  <div>
    <Title v-if="content?.data?.attributes?.meta?.title">
      {{ content?.data?.attributes?.meta?.title }}
    </Title>
    <Meta
      v-if="content?.data?.attributes?.meta?.description"
      name="description"
      :content="content?.data?.attributes?.meta?.description"
    />
    <HeadingSection first="Harding's" second="Property Services">
      <NuxtLink
        class="inline-block px-7 py-3 mr-2 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        to="/contact"
        role="button"
      >
        Contact us
      </NuxtLink>
      <NuxtLink
        class="inline-block px-7 py-3 bg-transparent text-green-600 font-medium text-sm leading-snug uppercase rounded hover:text-green-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
        to="/gallery"
        role="button"
      >
        View Gallery
      </NuxtLink>
    </HeadingSection>
    <About class="mb-24" />
    <Gallery :gallery="gallery" />
    <ContactSection class="mt-24" />
  </div>
</template>

<script lang="ts">
// import { kebabCase } from 'lodash-es'
import type { Strapi4Response } from '@nuxtjs/strapi'
export default {
  async setup() {
    const config = useRuntimeConfig()
    const { data: content } = await useFetch<Strapi4Response>('/api/home', {
      baseURL: config.STRAPI_URL,
      params: {
        'populate[0]': 'meta',
        'populate[1]': 'gallery',
        'populate[2]': 'gallery.image',
        // t: new Date().getTime(),
        // t: 1647049270404,
      },
      server: false,
    })
    return {
      content,
    }
  },
  computed: {
    gallery() {
      return this.content?.data?.attributes?.gallery?.data.map(
        ({
          attributes: {
            image: {
              data: {
                attributes: { url },
              },
            },
            title,
          },
        }) => ({
          title,
          src: url,
          url: `/gallery/${useKebabCase(title)}`,
        }),
      )
    },
  },
}
</script>

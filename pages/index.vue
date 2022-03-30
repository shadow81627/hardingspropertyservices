<template>
  <div>
    <Title v-if="content?.title" itemprop="name">{{ content?.title }}</Title>
    <Meta
      v-if="content?.description"
      name="description"
      :content="content?.description"
      itemprop="description"
    />
    <HeadingSection first="Harding&rsquo;s" second="Property Services">
      <NuxtLink
        class="inline-block px-7 py-3 mr-2 bg-primary-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
        to="/contact"
        role="button"
      >
        Contact us
      </NuxtLink>
      <NuxtLink
        class="inline-block px-7 py-3 bg-transparent text-primary-600 font-medium text-sm leading-snug uppercase rounded hover:text-primary-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
        to="/gallery"
        role="button"
      >
        View Gallery
      </NuxtLink>
    </HeadingSection>
    <About class="mb-24" />
    <Gallery :gallery="content?.gallery" />
    <ContactSection class="mt-24" />
  </div>
</template>

<script lang="ts">
import type { Strapi4Response } from '@nuxtjs/strapi'
export default {
  async setup() {
    // const { $img } = useNuxtApp()
    const config = useRuntimeConfig()
    function transform(content: Strapi4Response) {
      try {
        const title = content?.data?.attributes?.meta?.title
        const description = content?.data?.attributes?.meta?.description
        const gallery = content?.data?.attributes?.gallery?.data.map(
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
            url: title ? `/gallery/${useKebabCase(title)}` : undefined,
          }),
        )
        return {
          title,
          description,
          gallery,
        }
      } catch (error) {
        console.error(error)
      }
    }
    const { data: content } = await useFetch<Strapi4Response>('/api/home', {
      baseURL: config.STRAPI_URL,
      params: {
        'populate[0]': 'meta',
        'populate[1]': 'gallery',
        'populate[2]': 'gallery.image',
        // t: new Date().getTime(),
        t: 1648607183585,
      },
      server: true,
      transform,
    })
    return {
      content,
    }
  },
}
</script>

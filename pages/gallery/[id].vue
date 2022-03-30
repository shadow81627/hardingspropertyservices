<template>
  <div>
    <Html itemscope itemtype="https://schema.org/MediaGallery" />
    <HeadingSection :first="title" />
    <Gallery :gallery="gallery" />
  </div>
</template>

<script lang="ts">
import type { Strapi4Response } from '@nuxtjs/strapi'
export default {
  async setup() {
    const route = useRoute()
    const config = useRuntimeConfig()
    const { data: gallery } = await useFetch<Strapi4Response>(
      '/api/galleries',
      {
        baseURL: config.STRAPI_URL,
        params: {
          populate: '*',
          'filters[category][slug][$eq]': route.params.id,
          'sort[0]': 'category.slug',
          'sort[1]': 'order',
        },
        server: true,
        transform({ data }) {
          const result = data.map(
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
            }),
          )
          return result
        },
      },
    )

    return {
      title: useStartCase(route.params.id),
      gallery,
    }
  },
}
</script>

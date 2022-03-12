<template>
  <div>
    <HeadingSection first="Gallery" />
    <Gallery :gallery="gallery" />
  </div>
</template>

<script lang="ts">
import type { Strapi4Response } from '@nuxtjs/strapi'
export default {
  async setup() {
    const config = useRuntimeConfig()
    const { data: content } = await useFetch<Strapi4Response>(
      '/api/galleries',
      {
        baseURL: config.STRAPI_URL,
        params: { populate: '*' },
        server: false,
      },
    )
    return {
      content,
    }
  },
  computed: {
    gallery() {
      return this.content?.data?.map(
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
    },
  },
}
</script>

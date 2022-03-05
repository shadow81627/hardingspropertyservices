<template>
  <div>
    <Title v-if="content?.data?.attributes?.meta?.title">
      {{ content?.data?.attributes?.meta?.title }}
    </Title>
    <Meta v-if="content?.data?.attributes?.meta?.description" name="description" :content="content?.data?.attributes?.meta?.description" />
    <HeadingSection />
    <About class="mb-24" />
    <Gallery />
    <ContactForm class="mt-24" />
  </div>
</template>

<script lang="ts">
import type { Strapi4Response } from '@nuxtjs/strapi'
export default {
  async setup() {
    const config = useRuntimeConfig()
    const { data: content } = await useFetch<Strapi4Response>('/api/home', { baseURL: config.STRAPI_URL, params: { populate: 'meta' } })
    return {
      content,
    }
  },
}
</script>

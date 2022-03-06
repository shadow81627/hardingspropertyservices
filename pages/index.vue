<template>
  <div>
    <Title v-if="content?.data?.attributes?.meta?.title">
      {{ content?.data?.attributes?.meta?.title }}
    </Title>
    <Meta v-if="content?.data?.attributes?.meta?.description" name="description" :content="content?.data?.attributes?.meta?.description" />
    <HeadingSection first="Harding's" second="Property Services" />
    <About class="mb-24" />
    <Gallery :gallery="gallery" />
    <ContactForm class="mt-24" />
  </div>
</template>

<script lang="ts">
import type { Strapi4Response } from '@nuxtjs/strapi'
export default {
  async setup() {
    const config = useRuntimeConfig()
    const { data: content } = await useFetch<Strapi4Response>('/api/home', { baseURL: config.STRAPI_URL, params: { populate: 'meta' } })
    const gallery = [
      { src: '/img/AF1QipM6lEqzYS3JTm-Em6ulliuclqJZ5uE1oh5mUcL_=s1524-k-no.jpg' },
      { src: '/img/AF1QipPiYkY-IgxdCEYDcV6E-0ZdvqU5J1SBcmXaKvUi=s1160-k-no.jpg', title: 'Lounge room paint refresh' },
      { src: '/img/AF1QipP0e0BPg9clQU6UcTfHihp2N_ifzkbCkT69HN_4=s1218-k-no.jpg', title: 'Sunroom reno', url: '/gallery/sunroom-reno' },
    ]
    return {
      content,
      gallery,
    }
  },
}
</script>

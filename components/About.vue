<template>
  <section container px-5 py-2 mx-auto lg:pt-12 lg:px-32>
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
      rounded-lg
      bg-gray-100
      text-gray-700
      bg-opacity-75
      dark:bg-gray-900
      dark:text-gray-300
      dark:bg-opacity-75
    >
      <div v-if="content" v-html="content.paragraph1"></div>

      <ul
        list-disc
        list-inside
        py-2
        flex
        justify-between
        flex-wrap
        v-if="content"
      >
        <li
          md:px-2
          py-2
          flex-auto
          w-full
          md:w-auto
          v-for="service of content.services"
          :key="service.name"
        >
          {{ service.name }}
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

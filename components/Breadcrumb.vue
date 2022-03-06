<template>
  <ol class="list-reset flex">
    <li><a href="/" class="text-gray-500 hover:text-gray-600">Home</a></li>
    <template v-for="({ title, url }, index) in items" :key="url">
      <li v-if="index != items.lenght - 1">
        <span class="text-gray-500 mx-2">/</span>
      </li>
      <li>
        <NuxtLink :to="url" class="text-gray-500 hover:text-gray-600">
          {{ title }}
        </NuxtLink>
      </li>
    </template>
  </ol>
</template>

<script>
export default {
  computed: {
    items() {
      const route = useRoute()
      // const router = useRouter()
      return useSplit(route.path, '/')
        .filter(Boolean)
        .map(
          function (item) {
            this.acc = `${this.acc}/${item}`
            return { title: useStartCase(item), url: this.acc }
            // https://stackoverflow.com/a/47968178
          },
          { acc: '' },
        )
      // https://dev.to/lukeocodes/breadcrumbs-in-nuxt-5f2m
      // .filter(({ url }) => router.resolve(url).name !== null)
    },
  },
}
</script>

<template>
  <div>
    <HeadingSection />
    <Gallery />
    <ContactForm class="mt-24" />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { data } = await useAsyncData('content', () => $fetch(`${config.STRAPI_URL}/api/home?populate=meta`))
console.log('response', JSON.parse(JSON.stringify(data.value)))
</script>

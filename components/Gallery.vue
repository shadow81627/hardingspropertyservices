<template>
  <section class="overflow-hidden text-gray-700">
    <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <div class="flex flex-wrap -m-1 md:-m-2">
        <div
          v-for="{ src, title, url } in gallery"
          :key="src"
          class="flex flex-wrap md:w-1/3 sm:w-full"
          itemscope
          itemtype="https://schema.org/ImageObject"
        >
          <Component
            :is="url ? 'NuxtLink' : 'div'"
            :to="url"
            class="w-full m-1 md:m-2"
            relative
            overflow-hidden
            rounded-lg
          >
            <NuxtPicture
              :src="src"
              :alt="title"
              class="block object-cover object-center w-full h-full"
              width="416"
              height="555"
              sizes="sm:100vw md:33vw lg:416px"
              itemprop="contentUrl"
              loading="lazy"
              :modifiers="{ resizing_type: 'fill' }"
              :img-attrs="{
                class: 'block object-fit object-center w-full h-full',
              }"
            />
            <div
              v-if="title"
              class="absolute w-full py-4 bottom-0 inset-x-0 bg-gray-500 text-center leading-4"
              text-lg
              opacity-75
              text-white
              itemprop="name"
            >
              {{ title }}
            </div>
          </Component>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

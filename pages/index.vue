<template>
  <div>
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
    <HeadingSection first="Harding&rsquo;s" second="Property Services">
      <!-- <NuxtLink
        class="inline-block px-7 py-3 mr-2 bg-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out"
        to="/contact"
        role="button"
      >
        Contact us
      </NuxtLink>
      <NuxtLink
        class="inline-block px-7 py-3 bg-transparent text-white font-medium text-sm leading-snug uppercase rounded hover:text-primary hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
        to="/gallery"
        role="button"
      >
        View Gallery
      </NuxtLink> -->
    </HeadingSection>
    <About class="mb-24" />
    <Gallery :gallery="gallery" />
    <ContactSection class="mt-24" />
  </div>
</template>

<script lang="ts">
export default {
  async setup() {
    const title = "Harding's Property Services"
    const description =
      'Wayne provides a range of property services to Beaudesert: Lawn mowing, Rubbish removal, Gutter cleaning.'
    const gallery = [
      {
        src: '/assets/img/mower.jpg',
      },
      {
        src: '/assets/img/trailer.jpg',
      },
      {
        src: '/assets/img/garden.jpg',
      },
    ]
    return {
      title,
      description,
      gallery,
    }
  },
}
</script>

<template>
  <NuxtLink
    v-for="{ title, url } of items"
    :key="url"
    class="nav-link px-1 pt-1 border-b-2 inline-flex items-center font-medium font-medium"
    :class="classes(url)"
    :to="url"
    itemscope
    itemtype="https://schema.org/SiteNavigationElement"
  >
    {{ title }}
  </NuxtLink>
</template>

<script>
export default {
  setup() {
    return {
      items: [
        { title: 'Home', url: '/' },
        { title: 'Gallery', url: '/gallery' },
        { title: 'Contact', url: '/contact' },
      ],
    }
  },
  methods: {
    classes(url) {
      const isActive = this.$route.path === url
      return {
        'text-primary-500': !isActive,
        'text-primary-900': isActive,
        'hover:text-primary-700': !isActive,
        'focus:text-primary-700': !isActive,
        'border-primary-500': isActive,

        'dark:text-white-500': !isActive,
        'dark:text-white-900': isActive,
        'dark:hover:text-white-700': !isActive,
        'dark:focus:text-white-700': !isActive,
        'dark:border-white-500': isActive,

        'border-transparent': !isActive,
      }
    },
  },
}
</script>

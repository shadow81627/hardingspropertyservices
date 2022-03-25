<template>
  <div
    id="navbarSupportedContent"
    class="collapse navbar-collapse flex-grow items-center"
    flex
    basis-auto
  >
    <ul class="navbar-nav flex flex-row pl-0 list-style-none mr-auto">
      <li v-for="{ title, url } of items" :key="url" class="nav-item px-2">
        <NuxtLink
          class="nav-link text-primary-500 hover:text-primary-700 focus:text-primary-700 p-0"
          :to="url"
        >
          {{ title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
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
}
</script>

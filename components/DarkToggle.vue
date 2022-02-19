<script setup lang='ts'>
const color = useColorMode()
const toggle = computed(() => color.value === 'dark' ? 'light' : 'dark')
function toggleDark() {
  color.value = toggle.value
}
</script>

<template>
  <button class="!outline-none" :aria-label="`Toggle ${toggle} mode`" :title="`Toggle ${toggle} mode`" @click="toggleDark()">
    <div class="dark:i-carbon-moon i-carbon-sun" />
  </button>
</template>

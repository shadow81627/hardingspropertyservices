<script setup lang='ts'>
const color = useColorMode()
const toggle = color.value === 'dark' ? 'light' : 'dark'
function toggleDark() {
  color.value = toggle
}
</script>

<template>
  <button class="!outline-none" :aria-label="`toggle ${toggle} mode`" title="`toggle ${toggle} mode`" @click="toggleDark()">
    <div class="dark:i-carbon-moon i-carbon-sun">
      toggle {{ toggle }} mode
    </div>
  </button>
</template>

<template>
  <div
    v-if="show"
    class="fixed top-4 right-4 bg-green-500 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-mdb-autohide="false"
  >
    <div
      class="bg-green-500 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-green-400 rounded-t-lg"
    >
      <div class="text-white flex items-center">
        <div class="i-carbon-checkmark-filled text-lg mr-2" />
        Success
      </div>
      <div class="flex items-center">
        <!-- <p class="text-white opacity-90 text-xs">
          11 mins ago
        </p> -->
        <button
          type="button"
          class="w-4 h-4 ml-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          aria-label="Close"
          style="filter: invert(1) grayscale(100%) brightness(200%)"
          @click="close()"
        >
          <div i-carbon-close text-lg />
        </button>
      </div>
    </div>
    <div class="p-3 bg-green-500 rounded-b-lg break-words text-white">
      <slot>Notification</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:show'],
  methods: {
    close() {
      this.$emit('update:show', false)
    },
  },
}
</script>

<template>
  <section container py-2 mx-auto lg:pt-32 lg:px-64>
    <div text-center py-12 px-6 mx-auto>
      <h1
        class="text-3xl sm:text-4xl md:text-6xl xl:text-7xl mb-12"
        leading-none
        text-white-600
        uppercase
        font-brand
      >
        <span>{{ first }}</span>
        <br /><span text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-none>{{
          second
        }}</span>
      </h1>
      <slot>
        <!-- <a class="inline-block px-7 py-3 bg-transparent text-primary-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a> -->
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    first: { type: String, required: true },
    second: { type: String, required: false, default: null },
  },
}
</script>

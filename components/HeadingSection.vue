<template>
  <section>
    <div class="text-center py-24 px-6">
      <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
        {{ first }}
        <br><span class="text-green-600">{{ second }}</span>
      </h1>
      <slot>
        <!-- <a class="inline-block px-7 py-3 bg-transparent text-green-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a> -->
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    first: { type: String, required: true },
    second: { type: String, required: false },
  },
}
</script>

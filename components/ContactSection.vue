<template>
  <section
    container
    px-5
    py-2
    mx-auto
    lg:pt-12
    lg:px-32
    text-center
    md:text-left
  >
    <div
      class="p-8 rounded-lg bg-gray-100 text-gray-700"
      flex
      md:flex-row
      flex-col
      bg-opacity-75
    >
      <h2 class="font-semibold text-3xl">Have an Enquiry?</h2>
      <NuxtLink
        type="button"
        to="/contact"
        ml-auto
        my-4
        md:my-0
        class="inline-block px-6 py-2.5 bg-primary-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Contact Us
      </NuxtLink>
    </div>
  </section>
</template>

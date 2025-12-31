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
      class="p-8 justify-between items-center"
      flex
      md:flex-row
      gap-8
      flex-col
      section-bg
    >
      <h2 class="font-semibold text-3xl">Books are closed</h2>
      <div class="max-w-[65ch] text-pretty flex flex-col gap-4">
        <p>
          Thank you to everyone for your recent enquiries. Unfortunately
          Harding's Property Services can not take on any more work for the
          foreseeable future.
        </p>
        <p>
          Our books are now closed for new clients. Thank you for your support
          and understanding.
        </p>
      </div>

      <!-- <NuxtLink
        type="button"
        to="/contact"
        ml-auto
        my-4
        md:my-0
        class="inline-block px-6 py-2.5 bg-primary text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out"
      >
        Contact Us
      </NuxtLink> -->
    </div>
  </section>
</template>

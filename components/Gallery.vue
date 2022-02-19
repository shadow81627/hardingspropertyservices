<template>
  <section class="overflow-hidden text-gray-700 ">
    <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <div class="flex flex-wrap -m-1 md:-m-2">
        <div v-for="item in gallery" :key="item" class="flex flex-wrap md:w-1/3 sm:w-full">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              :src="item"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Array,
      default: () => [
        '/img/AF1QipM6lEqzYS3JTm-Em6ulliuclqJZ5uE1oh5mUcL_=s1524-k-no.jpg',
        '/img/AF1QipMe5BXTXxVqljn7InTndt6x5OMgaD7ftRVcOhwS=s1218-k-no.jpg',
        '/img/AF1QipMYbD_Vlj-Fz8bvkg9HXVQ4WomDK7r8bcLDMWFQ=s2031-k-no.jpg',
        '/img/AF1QipOfJPUO5qd7kLqeYyDb4aX4cgsefMjZS6cNVvTW=s2031-k-no.jpg',
        '/img/AF1QipOR5Y_RoJ-rYAHP-flIVXSJW9cW6oSa9W5xQRgB=s1352-k-no.jpg',
        '/img/AF1QipOSCCd7uOTJ36h2BG17XQaOuwqvqsUE-jHQUkF3=s1352-k-no.jpg',
        '/img/AF1QipP0e0BPg9clQU6UcTfHihp2N_ifzkbCkT69HN_4=s1218-k-no.jpg',
        '/img/AF1QipPiYkY-IgxdCEYDcV6E-0ZdvqU5J1SBcmXaKvUi=s1160-k-no.jpg',
        '/img/AF1QipPWRDAdAc_lWJ-MiA8tSn6fGlufrKNPJ052LQnQ=s1218-k-no.jpg',
      ],
    },
  },
}
</script>

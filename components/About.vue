<template>
  <section>
    <div
      container
      flex
      flex-wrap
      justify-between
      flex-col
      text-left
      md:px-5
      py-2
      mx-auto
      lg:pt-12
      lg:px-32
    >
      <p>
        Wayne Harding has a lifelong passion for home improvement and
        landscaping. He enjoys doing reno, gardening and DIY projects in his own
        home, and has worked professionally in this area for over 30 years.
        After decades of working these various building, mowing, turfing and
        hardware jobs, he has decided to use this knowledge to branch out and
        grow his own business. Wayne provides a range of property services to
        Beaudesert and surrounding areas:
      </p>

      <ul list-disc list-inside py-2 flex justify-between flex-wrap>
        <li md:px-2 py-2 flex-auto w-full md:w-auto>Property maintenance</li>
        <li md:px-2 py-2 flex-auto w-full md:w-auto>Lawn mowing</li>
        <li md:px-2 py-2 flex-auto w-full md:w-auto>
          General handyman services
        </li>
        <li md:px-2 py-2 flex-auto w-full md:w-auto>Odd jobs</li>
        <li md:px-2 py-2 flex-auto w-full md:w-auto>Flat pack assembly</li>
        <li md:px-2 py-2 flex-auto w-full md:w-auto>Gutter Cleaning</li>
        <li md:px-2 py-2 flex-auto w-full md:w-auto>Rubbish jobs</li>
      </ul>

      <p>
        If you’re in need of these services in your home, or you have an enquiry
        about a different odd job that needs doing, don’t hesitate to use the
        <NuxtLink
          to="/contact"
          class="text-primary-600 hover:text-primary-700 transition duration-300 ease-in-out"
        >
          contact form on our website </NuxtLink
        >. We will get back to you with a quote as soon as we can.
      </p>
    </div>
  </section>
</template>

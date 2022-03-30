<template>
  <nav
    class="relative w-full flex flex-wrap items-center justify-between"
    bg-white
    dark:bg-black
    bg-opacity-25
    dark:bg-opacity-25
  >
    <div
      class="container-fluid w-full flex flex-wrap items-center justify-between px-6"
    >
      <div class="container-fluid" flex justify-between h-16 lg:space-x-8>
        <Links />
      </div>
      <div flex justify-between>
        <span inline-flex items-center p-2>ABN 53 351 269 695</span>
        <DarkToggle px-2 />
      </div>
    </div>
  </nav>
</template>

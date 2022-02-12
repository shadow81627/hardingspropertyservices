<template>
  <Html lang="en-AU">
    <div class="min-h-screen flex flex-col justify-between">
      <main class="py-20 px-10 mb-auto">
        <NuxtPage />
        <Footer />
      </main>
      <footer class="text-center lg:text-left">
        <div class="text-center p-6">
          <small>
            <a href="https://daim.dev" target="__blank">Site by Damien Robinson</a>
          </small>
        </div>
      </footer>
    </div>
  </Html>
</template>

<style>
@import '~/styles/main.css';
</style>

<template>
  <div>
    <!-- <Logos mb-6 /> -->
    <h1>Hardings Property Services</h1>
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <!-- <InputEntry /> -->
  </div>
</template>

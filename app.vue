<script setup lang="ts">
const route = useRoute()    
</script>

<template>
  <div>
    <Navbar v-if="route.path === '/' || route.path === '/slices'" />
    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

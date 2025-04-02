<script setup lang="ts">
defineProps<{ title: string; stack: string[], image: string, url: string, responsive: string }>()
</script>

<template>
  <NuxtLink :to="url">
    <section class="p-4 border border-secondary rounded-lg hover:bg-orange-50">
      <figure class="relative rounded-md overflow-hidden">
        <img class="md:w-full" :src="image" :alt="title" loading="lazy" />
        <p class="absolute right-2 bottom-2 bg-white text-primary text-xs py-1 px-2 rounded-xl border border-primary">
          {{ responsive }}</p>
      </figure>
      <div class="py-2">
        <header>
          <h3 class="text-lg font-black mb-2">{{ title }}</h3>
        </header>
        <div class="flex justify-between items-center">
          <ul class="flex flex-wrap gap-2">
            <li v-for="item in stack" class="bg-orange-100 text-primary text-xs py-1 px-2 rounded-xl">
              {{ item }}
            </li>
          </ul>
          <aside>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-4 ml-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </aside>
        </div>
      </div>
    </section>
  </NuxtLink>
</template>

<script setup lang="ts">
import { sliceData } from "@/data/sliceData.ts"
</script>

<template>
  <div class="pt-24">
    <Slices :limit="sliceData.length" :showButton="false">
      <template #header>
        <header>
          <span class="bg-orange-100 text-primary text-xs py-1 px-2 rounded-xl">Update</span>
          <h2 class="text-primary text-2xl font-bold mt-2">Explore Slices</h2>
          <p class="text-content mb-4">Explore the best UI slicing projects!</p>
        </header>
      </template>
    </Slices>
  </div>
</template>

<style scoped></style>

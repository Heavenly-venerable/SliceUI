<script setup lang="ts">
import { sliceData } from "@/data/sliceData.ts"
const props = defineProps({
  limit: {
    type: Number,
    default: 3,
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  showButton: {
    type: Boolean,
    default: true,
  },
});

const items = sliceData.slice(0, props.limit);
</script>

<template>
  <Container>
    <slot name="header" v-if="showHeader">
      <header>
        <h2 class="text-primary text-2xl font-bold">Slices</h2>
        <p class="text-content mb-4">
          A collection of clean and simple UI slicing projects.
        </p>
      </header>
    </slot>
    <CardList :items="items" />
    <slot name="button" v-if="showButton && limit < sliceData.length">
      <routerLink to="/slices">
        <button class="bg-primary text-primary-content py-2 px-6 rounded-md">
          See More Slices
        </button>
      </routerLink>
    </slot>
  </Container>
</template>

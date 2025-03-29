<script setup lang="ts">
interface SliceItem {
  id: number;
  title: string;
  stack: string[];
  image: string;
}

defineProps<{ items: SliceItem[] }>()
</script>

<template>
  <ul class="grid grid-cols-1 mb-4 gap-4 md:grid-cols-2">
    <li v-for="item in items" :key="item.id">
      <Card :title="item.title" :stack="item.stack" :image="item.image" :url="item.url" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useParallax, useMediaQuery } from '@vueuse/core'

const container = ref<HTMLElement | null>(null)
const isMobile = useMediaQuery('(max-width: 700px)')

const { tilt, roll, source } = useParallax(container)

const cardStyle = computed(() => ({
  transform: `rotateX(${roll.value * (isMobile.value ? 10 : 20)}deg) rotateY(${tilt.value * (isMobile.value ? 10 : 20)}deg)`,
  transition: '.3s ease-out all',
}))

const imageStyle = computed(() => ({
  transform: `rotateX(${roll.value * (isMobile.value ? 30 : 40)}deg) rotateY(${tilt.value * (isMobile.value ? 30 : 40)}deg) scale(1.1)`,
  transition: '.3s ease-out all',
  perspective: '300px',
}))
</script>

<template>
  <div class="min-h-screen flex justify-center items-center bg-blue-700">
    <div style="perspective: 300px">
      <div ref="container" class="max-w-sm w-80 p-2 bg-slate-900 shadow-lg rounded-xl" :style="cardStyle">
        <div class="flex flex-col gap-y-2">
          <div class="relative w-full h-full flex justify-center overflow-hidden rounded-lg">
            <img :style="imageStyle"
              src="https://images.unsplash.com/photo-1634632000017-d77eed8cd8f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9ua2V5JTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww"
              alt="Monkey Illustration" />
            <p
              class="absolute px-8 top-0 bg-blue-500 text-lg text-white font-semibold border-s-4 border-e-4 border-b-4 border-slate-900 rounded-ee-lg rounded-es-lg">
              Uncommon</p>
            <p
              class="absolute px-8 bottom-0 bg-slate-800 text-lg text-white font-semibold border-s-4 border-e-4 border-t-4 border-slate-900 rounded-se-lg rounded-ss-lg">
              0.5 ETH</p>
          </div>
          <div class="p-2 text-white space-y-2">
            <h1 class="text-xl font-bold">MONKEY LEE #67</h1>
            <div class="flex gap-x-2">
              <span class="px-4 rounded-lg bg-black">M</span>
              <h2 class="text-slate-400">MONKEY KING</h2>
            </div>
          </div>
          <div class="p-4 bg-slate-800 w-full flex justify-between rounded-lg">
            <div class="space-y-2 text-slate-400">
              <h3>Avg earnings</h3>
              <p class="text-white">$55/h</p>
            </div>
            <div class="space-y-2 text-slate-400">
              <h3>Distribution %</h3>
              <div class="flex justify-between gap-x-2">
                <div class="flex items-center gap-x-2">
                  <div class="bg-green-600 h-3 w-3 rounded-full"></div>
                  <p>80</p>
                </div>
                <div class="flex items-center gap-2">
                  <p>20</p>
                  <div class="bg-purple-600 h-3 w-3 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

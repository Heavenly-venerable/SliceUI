<script setup lang="ts">
const categories: string[] = ["semua", "national", "international", "ekonomi", "olahraga", "teknologi", "hiburan", "gaya hidup"]
const isHidden = ref(false)
let lastScrollTop = 0

const { data, error, status, refresh } = useAsyncData("news", () => $fetch(`https://berita-indo-api-next.vercel.app/api/cnn-news/`))

const handleScroll = () => {
  const currentScroll = window.scrollY
  isHidden.value = currentScroll > lastScrollTop && currentScroll > 50
  lastScrollTop = currentScroll
}

watch(error, (err) => {
  if (err) {
    setTimeout(() => {
      refresh()
    }, 2000)
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen">
    <nav class="fixed top-0 left-0 p-4 w-full bg-white flex justify-between items-center z-30"
      :class="isHidden ? '-translate-y-full' : 'translate-y-0'">
      <div class="relative">
        <input class="py-2 px-4 bg-slate-100 rounded-full" type="text" placeholder="Seach News">
        <svg class="absolute top-3 right-4 w-4 h-4 fill-slate-400" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
      <button>
        <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
          <path
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
    </nav>
    <div class="py-20 px-4 space-y-8">
      <div>
        <h1 class="text-3xl font-semibold">Good Morning</h1>
        <p class="text-slate-500">Explore the world by one click</p>
      </div>
      <div class="relative overflow-hidden rounded-3xl">
        <img class="max-w-full h-64 object-cover" :src="data?.data[0]?.image.large" :alt="data?.data[0]?.title">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-100/30 to-transparent"></div>
        <p class="absolute bottom-0 left-0 p-4 text-white">{{ data?.data[0]?.title }}</p>
      </div>
      <div class="overflow-auto no-scrollbar">
        <ul class="flex items-center gap-x-2">
          <li v-for="(category, index) in categories" :key="category"
            class="px-4 rounded-md hover:text-white hover:bg-slate-800 text-nowrap">
            {{ category }}
          </li>
        </ul>
      </div>
      <div>
        <div v-if="status === 'pending'" class="place-self-center text-lg">Loading ...</div>
        <div v-else-if="error" class="place-self-center text-lg text-red-500">{{ error }}</div>
        <div v-else-if="data" class="flex flex-col gap-y-4">
          <div v-for="news in data.data" class="flex p-2 bg-slate-100 rounded-xl gap-x-4">
            <div class="overflow-hidden rounded-lg">
              <img class="w-24 h-full object-cover" :src="news.image.small" :alt="news.title" loading="lazy">
            </div>
            <div class="w-44">
              <p class="py-2 text-xs">{{ news.contentSnippet.split("").slice(0, 70).join("") }}...</p>
              <div class="py-2 flex justify-between items-center text-slate-500 text-xs">
                <span>CNN News</span>
                <span>Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full bg-white">
      <ul class="py-4 px-8 flex justify-evenly gap-x-4">
        <li class="">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
        </li>
        <li class="">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" />
          </svg>
        </li>
        <li>
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </li>
        <li>
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
          </svg>
        </li>
        <li>
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<script setup lang="ts">
const isHidden = ref(false)
const isMenuOpen = ref(false)
let lastScrollTop = 0

const handleScroll = () => {
  const currentScroll = window.scrollY
  isHidden.value = currentScroll > lastScrollTop && currentScroll > 50
  lastScrollTop = currentScroll
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header id="navbar" :class="[
    'fixed top-0 left-0 w-full bg-base-100 shadow-md transition-transform duration-300 z-50 md:px-16',
    isHidden ? '-translate-y-full' : 'translate-y-0'
  ]">
    <nav class="p-4 flex justify-between items-center md:p-6">
      <h2 class="text-primary text-3xl font-bold">SliceUI</h2>
      <button class="text-base-content md:hidden" @click="toggleMenu">
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <ul class="hidden text-base-content md:flex space-x-4">
        <NuxtLink to="/" class="hover:text-primary hover:underline" @click="closeMenu">Home</NuxtLink>
        <NuxtLink to="/slices" class="hover:text-primary hover:underline" @click="closeMenu">Slices</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-primary hover:underline" @click="closeMenu">Contact</NuxtLink>
      </ul>
    </nav>
    <transition name="mobile-menu">
      <div id="mobileMenu" v-if="isMenuOpen"
        class="absolute w-full bg-base-100 text-base-content text-lg shadow-md flex flex-col space-y-4 p-4 md:hidden">
        <NuxtLink to="/" class="hover:text-primary hover:underline" @click="closeMenu">Home</NuxtLink>
        <NuxtLink to="/slices" class="hover:text-primary hover:underline" @click="closeMenu">Slices</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-primary hover:underline" @click="closeMenu">Contact</NuxtLink>
      </div>
    </transition>
  </header>
</template>

<style scoped>
header {
  will-change: transform;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>

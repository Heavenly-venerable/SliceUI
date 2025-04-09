<script setup lang="ts">
const showSkills = ref(false)
</script>

<template>
  <main class="min-h-screen flex justify-center items-center bg-white">
    <section class="p-4 w-80 bg-slate-800 rounded-3xl">
      <article class="w-full h-full bg-white rounded-2xl">
        <header class="p-4 flex justify-between items-center">
          <nav>
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </nav>
          <button>
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
            </svg>
          </button>
        </header>
        <section class="flex flex-col items-center gap-y-4">
          <figure class="w-24 h-24 rounded-full bg-slate-800"></figure>
          <div class="text-center">
            <h1 class="text-xl font-bold">Someone</h1>
            <h2 class="text-lg text-slate-500 font-semibold">Web Developer</h2>
          </div>
          <div class="flex flex-wrap item-center gap-x-4">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
              viewBox="0 0 256 256"><!-- Icon from Skill Icons by tandpfun - https://github.com/tandpfun/skill-icons/blob/main/LICENSE -->
              <g fill="none">
                <rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" />
                <rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" />
                <path fill="#fff"
                  d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334" />
                <defs>
                  <radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1"
                    gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FD5" />
                    <stop offset=".1" stop-color="#FD5" />
                    <stop offset=".5" stop-color="#FF543E" />
                    <stop offset="1" stop-color="#C837AB" />
                  </radialGradient>
                  <radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1"
                    gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3771C8" />
                    <stop offset=".128" stop-color="#3771C8" />
                    <stop offset="1" stop-color="#60F" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </g>
            </svg>
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
              viewBox="0 0 256 256"><!-- Icon from Skill Icons by tandpfun - https://github.com/tandpfun/skill-icons/blob/main/LICENSE -->
              <g fill="none">
                <rect width="256" height="256" fill="#fff" rx="60" />
                <rect width="256" height="256" fill="#0A66C2" rx="60" />
                <path fill="#fff"
                  d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4" />
              </g>
            </svg>
          </div>
          <div class="p-4">
            <button @click="showSkills = !showSkills"
              class="px-4 py-2 bg-slate-800 text-center text-white rounded-md">Reveal</button>
          </div>
          <transition name="slide-up">
            <section v-if="showSkills" class="p-8 w-full bg-slate-800 rounded-ss-3xl rounded-se-3xl space-y-4">
              <h3 class="text-slate-500">Skill</h3>
              <div class="flex flex-wrap justify-evenly item-center gap-x-4">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="48.77" height="32"
                  viewBox="0 0 256 168"><!-- Icon from SVG Logos by Gil Barbara - https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt -->
                  <path fill="#00DC82"
                    d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.96 16.96 0 0 0 6.302-6.115a16.3 16.3 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.97 16.97 0 0 0-6.301-6.113a17.6 17.6 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.96 16.96 0 0 0-6.3 6.113l-16.342 27.473l-31.95-53.724a17 17 0 0 0-6.304-6.112A17.64 17.64 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a17 17 0 0 0-6.303 6.112L2.31 141.975a16.3 16.3 0 0 0-2.31 8.35c0 2.932.793 5.813 2.304 8.352a16.96 16.96 0 0 0 6.302 6.115a17.6 17.6 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983l15.618-26.215l46.874 78.742h-62.492zm-67.64-26.24l-41.688-.01L96.782 35.796l31.181 52.492l-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416" />
                </svg>
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                  viewBox="0 0 128 128"><!-- Icon from Devicon by konpa - https://github.com/devicons/devicon/blob/master/LICENSE -->
                  <path fill="none"
                    d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01" />
                  <path fill="#35495e" d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z" />
                  <path fill="#41b883" d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z" />
                </svg>
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                  viewBox="0 0 128 128"><!-- Icon from Devicon by konpa - https://github.com/devicons/devicon/blob/master/LICENSE -->
                  <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                  <path fill="#007acc"
                    d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z" />
                </svg>
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                  viewBox="0 0 128 128"><!-- Icon from Devicon by konpa - https://github.com/devicons/devicon/blob/master/LICENSE -->
                  <path fill="#38bdf8"
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0" />
                </svg>
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                  viewBox="0 0 256 256"><!-- Icon from Skill Icons by tandpfun - https://github.com/tandpfun/skill-icons/blob/main/LICENSE -->
                  <g fill="none">
                    <rect width="256" height="256" fill="#023430" rx="60" />
                    <path fill="#10AA50"
                      d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773" />
                    <path fill="#B8C4C2"
                      d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397" />
                    <path fill="#12924F"
                      d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684" />
                  </g>
                </svg>
              </div>
              <h3 class="text-slate-500">Profession</h3>
              <div class="border-b border-b-slate-500">
                <p class="text-white">Freelance at Fiverr</p>
              </div>
            </section>
          </transition>
        </section>
      </article>
    </section>
  </main>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

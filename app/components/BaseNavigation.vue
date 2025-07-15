<script setup>
import { useDownloadStore } from "~~/stores/downloadStore";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const downloadCV = () => {
  const downloadStore = useDownloadStore(); // Get store instance
  downloadStore.triggerDownload(); // Trigger the download
};
const printCV = () => {
  const downloadStore = useDownloadStore(); // Access the store
  downloadStore.triggerPrint(); // Trigger the print action
};
</script>

<template>
  <header class="sticky top-0 z-50 bg-transparent">
    <!-- Use flex-col to stack nav and button vertically -->
    <div class="flex flex-col">
      <!-- Top row: logo + socials -->
      <div class="bg-white py-4 border-b shadow-sm">
        <nav class="container flex items-center justify-between">
          <NuxtLink to="/" class="flex gap-1 items-center">
            <NuxtImg
              width="56px"
              src="/an2ni.png"
              format="webp"
              alt="ACDC logo with C in red"
            />

            <!-- <span class="text-xl font-bold">
              A<span class="text-red-500">C</span>DC
            </span> -->
          </NuxtLink>

          <!-- Socials -->
          <div class="hidden md:flex items-center gap-2">
            <!-- <div class="flex items-center gap-2"> -->
            <ul class="flex items-center gap-4 text-sm capitalize px-4">
              <!-- Add nav links here if needed -->
              <!-- <li>
                <NuxtLink
                  to="/"
                  :class="[
                    route.path === '/'
                      ? 'text-red-500 font-bold'
                      : 'text-gray-700',
                    'transition-colors hover:text-red-500',
                  ]"
                  >Home</NuxtLink
                >
              </li> -->

              <li>
                <NuxtLink
                  to="/about"
                  :class="[
                    route.path === '/about'
                      ? 'text-red-500 font-bold'
                      : 'text-gray-700',
                    'transition-colors hover:text-red-500',
                  ]"
                  >About</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/portfolio"
                  :class="[
                    route.path === '/portfolio'
                      ? 'text-red-500 font-bold'
                      : 'text-gray-700',
                    'transition-colors hover:text-red-500',
                  ]"
                  @click="toggleMobileMenu"
                  >Projects</NuxtLink
                >
              </li>
              <!-- <li>
                <NuxtLink
                  to="/skills"
                  :class="[
                    route.path === '/skills'
                      ? 'text-red-500 font-bold'
                      : 'text-gray-700',
                    'transition-colors hover:text-red-500',
                  ]"
                  >Skills</NuxtLink
                >
              </li> -->
              <li>
                <NuxtLink
                  to="/contact"
                  :class="[
                    route.path === '/contact'
                      ? 'text-red-500 font-bold'
                      : 'text-gray-700',
                    'transition-colors hover:text-red-500',
                  ]"
                  >contact</NuxtLink
                >
              </li>

              <li>
                <NuxtLink
                  to="/cv"
                  :class="[
                    route.path === '/cv'
                      ? 'text-red-500 font-bold'
                      : 'text-gray-700',
                    'transition-colors hover:text-red-500',
                  ]"
                  >CV</NuxtLink
                >
              </li>
            </ul>
            <a
              href="https://www.linkedin.com/in/an2nicaballero/"
              target="_blank"
            >
              <Icon name="logos:linkedin-icon" class="w-5 h-5" />
            </a>
            <a href="https://www.x.com/aceofcavaliers/" target="_blank">
              <Icon name="simple-icons:x" class="w-5 h-5" />
            </a>
            <a href="https://github.com/acecavaliers" target="_blank">
              <Icon name="logos:github-icon" class="w-5 h-5" />
            </a>
          </div>

          <!-- Hamburger Menu (Mobile Only) -->
          <button class="md:hidden" @click="toggleMobileMenu">
            <Icon name="mdi:menu" class="w-6 h-6" />
          </button>
        </nav>
      </div>

      <!-- Bottom row: Print button -->
      <div class="container">
        <div class="flex justify-end space-x-0">
          <div class="relative group inline-block">
            <button
              @click="printCV"
              class="flex items-center gap-2 px-3 py-1 bg-sky-700 text-white text-md rounded-bl-md"
            >
              <Icon name="material-symbols:print-sharp" class="w-5 h-5" />
              <!-- <span class="text-sm">Print CV</span> -->
            </button>

            <!-- Tooltip -->
            <span
              class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 transition-opacity whitespace-nowrap z-50"
            >
              Print CV
            </span>
          </div>

          <div class="relative group inline-block">
            <button
              @click="downloadCV"
              class="flex items-center gap-2 px-3 py-1 bg-sky-800 text-white text-md rounded-br-md"
            >
              <Icon name="material-symbols:download-sharp" class="w-5 h-5" />
              <!-- <span class="text-sm">download CV</span> -->
            </button>

            <!-- Tooltip -->
            <span
              class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 transition-opacity whitespace-nowrap z-50"
            >
              Download CV
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Drawer Menu -->
    <transition name="slide">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        @click.self="toggleMobileMenu"
      >
        <div
          class="absolute top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-50"
        >
          <button class="mb-4" @click="toggleMobileMenu">
            <Icon name="mdi:close" class="w-6 h-6" />
          </button>
          <ul class="flex flex-col gap-4 text-md">
            <!-- <li>
              <NuxtLink
                to="/"
                :class="[
                  route.path === '/'
                    ? 'text-red-500 font-bold'
                    : 'text-gray-700',
                  'transition-colors hover:text-red-500',
                ]"
                @click="toggleMobileMenu"
                >Home</NuxtLink
              >
            </li> -->
            <li>
              <NuxtLink
                to="/about"
                :class="[
                  route.path === '/about'
                    ? 'text-red-500 font-bold'
                    : 'text-gray-700',
                  'transition-colors hover:text-red-500',
                ]"
                @click="toggleMobileMenu"
                >About</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/portfolio"
                :class="[
                  route.path === '/portfolio'
                    ? 'text-red-500 font-bold'
                    : 'text-gray-700',
                  'transition-colors hover:text-red-500',
                ]"
                @click="toggleMobileMenu"
                >Projects</NuxtLink
              >
            </li>
            <!-- <li>
              <NuxtLink
                to="/skills"
                :class="[
                  route.path === '/skills'
                    ? 'text-red-500 font-bold'
                    : 'text-gray-700',
                  'transition-colors hover:text-red-500',
                ]"
                @click="toggleMobileMenu"
                >Skills</NuxtLink
              >
            </li> -->
            <li>
              <NuxtLink
                to="/cv"
                :class="[
                  route.path === '/cv'
                    ? 'text-red-500 font-bold'
                    : 'text-gray-700',
                  'transition-colors hover:text-red-500',
                ]"
                @click="toggleMobileMenu"
                >CV</NuxtLink
              >
            </li>
          </ul>
          <div class="mt-6 flex gap-4">
            <a href="https://linkedin.com/in/an2nicaballero" target="_blank">
              <Icon name="logos:linkedin-icon" class="w-5 h-5" />
            </a>
            <a href="https://www.x.com/aceofcavaliers/" target="_blank">
              <Icon name="simple-icons:x" class="w-5 h-5" />
            </a>
            <a href="https://github.com/acecavaliers" target="_blank">
              <Icon name="logos:github-icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

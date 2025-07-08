<script setup>
import { useDownloadStore } from "~~/stores/downloadStore";

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

          <ul class="flex items-center gap-6 text-md font-bold capitalize">
            <!-- Add nav links here if needed -->
          </ul>

          <!-- Socials -->
          <div class="flex items-center gap-2">
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
        </nav>
      </div>

      <!-- Bottom row: Print button -->
      <div class="container">
        <div class="flex justify-end space-x-0">
          <div class="relative group inline-block">
            <button
              @click="printCV"
              class="px-3 bg-sky-700 text-white text-md rounded-bl-md"
            >
              <Icon name="material-symbols:print-sharp" class="w-5 h-5" />
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
              class="px-3 bg-sky-800 text-white text-md rounded-br-md"
            >
              <Icon name="material-symbols:download-sharp" class="w-5 h-5" />
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
  </header>
</template>

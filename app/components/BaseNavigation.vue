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
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="56px" src="/acdc.png" format="webp" alt="" />
        <span class="text-xl font-bold"
          >A<span class="text-red-500">C</span>DC</span
        >
      </NuxtLink>
      <ul class="flex items-center gap-6 ml-auto text-md font-bold capitalize">
        <!-- <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li> -->
        <!-- <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/skills">Skills</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/experience">Experience</NuxtLink>
        </li>
         -->
      </ul>

      <div>
        <a href="https://www.linkedin.com/in/an2nicaballero/" target="_blank">
          <Icon
            name="logos:linkedin-icon"
            style="color: black"
            class="w-5 h-5 mr-1.5"
        /></a>

        <a href="https://www.x.com/aceofcavaliers/" target="_blank">
          <Icon
            name="simple-icons:x"
            style="color: black"
            class="w-5 h-5 mr-1.5"
        /></a>

        <a href="https://github.com/acecavaliers" target="_blank">
          <Icon
            name="logos:github-icon"
            style="color: black"
            class="w-5 h-5 mr-1.5"
        /></a>
      </div>
      <!-- <button
        @click="printCV"
        class="p-2 bg-gray-700 text-white text-sm rounded-md"
      >
        <Icon name="mdi-light:printer" style="color: white" class="w-4 h-4" />
        Print
      </button>
      <button
        @click="downloadCV"
        class="p-2 bg-gray-700 text-sm ml-2 text-white rounded-md shadow"
      >
        <Icon name="mdi-light:download" style="color: white" class="w-4 h-4" />
        Download
      </button> -->
    </nav>
  </header>
</template>

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
        <li>
          <NuxtLink to="/MyResume">Resume</NuxtLink>
        </li> -->
        <!-- <li v-if="!user">
          <a href="" to="/login">Login</a>
        </li> -->
      </ul>
      <!-- <button
        @click="downloadCV"
        class="px-4 py-2 bg-gray-700 text-white font-bold rounded shadow"
      >
        Download CV
      </button> -->
      <div class="mt-1.5">
        <Icon
          name="logos:linkedin-icon"
          style="color: black"
          class="w-6 h-6 mr-1.5"
        />
        <Icon
          name="simple-icons:x"
          style="color: black"
          class="w-6 h-6 mr-1.5"
        />
      </div>
      <button
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
      </button>
    </nav>
  </header>
</template>

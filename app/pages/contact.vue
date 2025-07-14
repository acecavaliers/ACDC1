<template>
  <div class="container">
    <section class="pb-4">
      <div class="container">
        <div>
          <h1
            class="text-2xl lg:text-4xl font-extrabold mb-6 text-balance uppercase"
          >
            Contact
          </h1>
          <ul class="">
            <li class="">
              <p>{{ info.name }}</p>
              <p>{{ info.phone }}</p>
              <p>{{ info.email }}</p>
            </li>
          </ul>

          <div class="space-x-4 py-4">
            <a
              href="https://www.linkedin.com/in/an2nicaballero/"
              target="_blank"
            >
              <Icon name="logos:linkedin-icon" class="w-8 h-8" />
            </a>
            <a href="https://www.x.com/aceofcavaliers/" target="_blank">
              <Icon name="simple-icons:x" class="w-8 h-8" />
            </a>
            <a href="https://github.com/acecavaliers" target="_blank">
              <Icon name="logos:github-icon" class="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/ac.deep.mind" target="_blank">
              <Icon name="logos:facebook" class="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { jsPDF } from "jspdf";

import data from "../pages/data/data.json";
import { onMounted, ref, computed, watch, onBeforeUnmount } from "vue";
definePageMeta({
  layout: "default",
});
import { useDownloadStore } from "~~/stores/downloadStore";

const info = ref({});
const currentYear = new Date().getFullYear();
const downloadCV = () => {
  const downloadStore = useDownloadStore();
  downloadStore.triggerDownload();
};
const printCV = () => {
  const downloadStore = useDownloadStore();
  downloadStore.triggerPrint();
};

onMounted(() => {
  info.value = data.info;
});
</script>

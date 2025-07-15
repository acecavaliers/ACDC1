<template>
  <div>
    <main>
      <section class="py-4">
        <div class="container items-center">
          <div>
            <h1
              class="text-2xl lg:text-4xl font-extrabold mb-6 text-balance uppercase"
            >
              All Projects
            </h1>
            <p class="">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </p>
          </div>
        </div>
      </section>
      <section class="py-4">
        <div class="container items-center">
          <table class="min-w-full text-sm text-left bg-white">
            <thead class="text-gray-700">
              <tr>
                <th class="px-2 py-2 w-6">Year</th>
                <th class="px-0 py-2 w-40">Project</th>
                <!-- wider -->
                <th class="px-2 py-2 w-16">Made at</th>
                <th class="px-0 py-2 w-64">Built with</th>
                <!-- wider -->
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-t"
                v-for="(prj, index) in projects"
                :key="index"
              >
                <td class="px-2 py-4">{{ prj.year }}</td>
                <td class="px-0 py-4">{{ prj.name }}</td>
                <td class="px-0 py-4">{{ prj.company }}</td>
                <td class="px-0 py-4">
                  <span
                    class="mr-1 px-2 rounded text-gray-100 bg-green-600"
                    v-for="(tch, index) in prj.technology"
                    :key="index"
                  >
                    {{ tch }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { jsPDF } from "jspdf";

import data from "./data/data.json";
import { onMounted, ref, computed, watch, onBeforeUnmount } from "vue";
definePageMeta({
  layout: "default",
});
import { useDownloadStore } from "~~/stores/downloadStore";

const projects = ref([]);

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
  //
  projects.value = data.projects;
});
</script>

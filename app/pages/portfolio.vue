<template>
  <div class="container">
    <section class="py-4">
      <div class="container items-center">
        <div>
          <h1
            class="pt-2 font-extrabold text-xl lg:text-2xl text-sky-900 pb-2 text-balance"
          >
            Projects
          </h1>
          <p class="">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
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
            <tr class="border-t">
              <td class="px-2 py-4">2021</td>
              <td class="px-0 py-4">DGCDI Price Inquiry</td>
              <td class="px-2 py-4">DGCDI</td>
              <td class="px-0 py-4">VB.Net MSSQL</td>
            </tr>
            <tr class="border-t">
              <td class="px-2 py-4">2021</td>
              <td class="px-0 py-4">Harvard Business School Next.js Site</td>
              <td class="px-2 py-4">Upstatement</td>
              <td class="px-0 py-4">React TypeScript Next.js Contentful</td>
            </tr>
            <tr class="border-t">
              <td class="px-2 py-4">2021</td>
              <td class="px-0 py-4">
                Philadelphia Inquirer Sports Scoreboards
              </td>
              <td class="px-2 py-4">Scout</td>
              <td class="px-0 py-4">WordPress Timber WooCommerce</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
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

const techSkills = ref([]);
const skillIcon = ref([]);
const softSkill = ref([]);
const xp = ref([]);
const education = ref({});
const info = ref({});
const summary = ref("");
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
  techSkills.value = data.technicalSkills;
  skillIcon.value = data.skillIcon;
  softSkill.value = data.skill;
  xp.value = data.experience;
  education.value = data.education;
  info.value = data.info;
  summary.value = data.summary;
});
</script>

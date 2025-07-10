<template>
  <div>
    <main>
      <!-- <section class="bg-[#f1f1f1]">
        <div class="container flex justify-end">
          <button
            @click="printCV"
            class="px-3 py-1 bg-sky-700 text-white font-medium text-md rounded-b-md"
          >
            Print CV
          </button>
        </div>
      </section> -->
      <section class="">
        <div
          class="container flex flex-col lg:flex-row items-center py-10 gap-10"
        >
          <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h1
              class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance uppercase"
            >
              Anthony Caballero
            </h1>
            <p class="text-xl lg:text-2xl mb-4 text-balance">
              Full-Stack Developer
            </p>
            <p class="text-md lg:text-md mb-4 text-balance">
              {{ summary }}
            </p>
          </div>
          <div class="flex-1 order-1 lg:order-2">
            <div
              class="w-1/2 border-8 border-gray-700 rounded-full overflow-hidden"
            >
              <NuxtImg
                sizes="xs:100vw sm:322px"
                src="/ac.png"
                format="webp"
                densities="x1"
                alt=""
                class="w-full h-full p-2 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="py-4 border-b shadow-md">
        <div class="container">
          <div>
            <p class="text-xl lg:text-2xl text-sky-900 pb-2 text-balance">
              SKILLS
            </p>

            <h1 class="pt-2 font-extrabold">Technical Skills</h1>
            <ul class="ml-2 p-2">
              <li v-for="(skill, index) in techSkills" :key="index">
                <Icon
                  :name="skill.icon"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />

                {{ skill.type }}: {{ skill.items.join(", ") }}
              </li>
            </ul>
            <div class="ml-2 p-2">
              <div class="flex justify-start">
                <div v-for="(icons, index) in skillIcon" :key="index">
                  <Icon
                    :name="icons.icon"
                    style="color: black"
                    class="w-10 h-10 mr-1.5"
                  />
                </div>
              </div>
            </div>
            <h1 class="pt-2 font-extrabold">Soft Skills</h1>

            <ul class="ml-2 p-2">
              <li v-for="(skill, index) in softSkill" :key="index">
                <Icon
                  :name="skill.icon"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                {{ skill.skill }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-[#f1f1f1] border-b py-8 shadow-sm">
        <div class="container">
          <div>
            <p class="text-xl lg:text-2xl text-sky-900 text-balance">
              WORK EXPERIENCE
            </p>
            <div v-for="(exp, index) in xp" :key="index">
              <h1 class="pt-2 text-lg font-extrabold">
                {{ exp.position }}
              </h1>
              <h1 class="italic">
                {{ exp.company }}
              </h1>
              <h1 class="italic">{{ exp.date }}</h1>
              <ul class="ml-2">
                <li v-for="(task, index) in exp.responsibilities" :key="index">
                  <Icon
                    name="ion:ellipse-sharp"
                    style="color: black"
                    class="w-2 h-2 mr-1.5"
                  />
                  {{ task.summary }}

                  <ul class="ml-2">
                    <li
                      v-for="(detail, index) in task.details"
                      :key="index"
                      class="p-1"
                    >
                      <Icon
                        name="ion:chevron-forward"
                        style="color: black"
                        class="w-2 h-2 mr-1.5"
                      />
                      {{ detail }}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="py-8">
        <div class="container">
          <div>
            <p class="text-xl lg:text-2xl text-sky-900 pb-2 text-balance">
              EDUCATION
            </p>
            <div v-for="(educ, index) in education" :key="index">
              {{ educ }}
            </div>
          </div>
        </div>
      </section>
      <section class="bottom-0 w-full h-8 bg-[#f1f1f1]">
        <div class="container pt-1 flex justify-between">
          <p class="text-sm">© {{ currentYear }} ACDC. All rights reserved</p>
          <p class="text-sm">
            <span class="text-sm">Contact: {{ info.phone }}</span>
            <span class="text-sm ml-4">Email: {{ info.email }}</span>
          </p>
        </div>
      </section>

      <!-- hidden -->
      <div class="hidden">
        <div id="printable-area" class="w-[8.5in] h-[13in] bg-white mx-auto">
          <!-- Header / Basic Personal Info -->
          <section class="py-4">
            <div class="container flex">
              <img
                class="rounded-md"
                src="/ac_resume.jpg"
                alt="Profile Picture"
                style="width: 66px; height: 85px; object-fit: cover"
              />

              <!-- <img src="/acdc.png" alt="" /> -->
              <div class="px-4">
                <h1 class="text-xl font-medium uppercase">{{ info.name }}</h1>
                <div class="flex text-sm">
                  <div class="sm:w-16">Phone</div>
                  <h1 class="">: {{ info.phone }}</h1>
                </div>
                <div class="flex text-sm">
                  <div class="sm:w-16">Email</div>
                  <h1 class="">: {{ info.email }}</h1>
                </div>
                <div class="flex text-sm">
                  <div class="sm:w-16">Address</div>
                  <h1 class="">: {{ info.address }}</h1>
                </div>
              </div>
            </div>
          </section>
          <!-- Summary -->
          <section class="pb-4">
            <div class="container">
              <h1
                class="border-b-2 py-2 border-sky-900 text-sm text-sky-950 font-bold"
              >
                SUMMARY
              </h1>
              <p class="text-sm">
                {{ summary }}
              </p>
            </div>
          </section>

          <!-- Skills -->
          <section class="pb-4">
            <div class="container flex justify-between">
              <div class="w-1/2">
                <h1
                  class="border-b-2 py-2 border-sky-900 text-sm text-sky-950 font-bold"
                >
                  Technical Skills
                </h1>

                <ul class="text-sm ml-2">
                  <li v-for="(skill, index) in techSkills" :key="index">
                    • {{ skill.items.join(", ") }}
                  </li>
                  <!-- <li>
                    • Programming Languages : Visual Basic, C#, Java,
                    JavaScript, PHP, and SQL
                  </li>
                  <li>• Frameworks & Libraries : Laravel and Vuejs.</li>
                  <li>
                    • ERP Systems : SAP Business One and SAP Crystal Reports.
                  </li> -->
                </ul>
              </div>
              <div class="w-1/2">
                <h1
                  class="border-b-2 py-2 border-sky-900 text-sm text-sky-950 font-bold"
                >
                  Soft Skills
                </h1>
                <ul class="text-sm ml-2">
                  <li v-for="(skill, index) in softSkill" :key="index">
                    • {{ skill.skill }}
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <!-- Work Experience -->

          <section class="pb-4">
            <div class="container">
              <div>
                <h1
                  class="border-b-2 py-2 border-sky-900 text-sm text-sky-950 font-bold"
                >
                  WORK EXPERIENCE
                </h1>

                <div v-for="(exp, index) in xp" :key="index" class="pb-2">
                  <h1 class="pt-2 text-sm font-bold">
                    {{ exp.position }}
                  </h1>
                  <h1 class="italic text-sm">
                    {{ exp.company }}
                  </h1>
                  <h1 class="italic text-sm">{{ exp.date }}</h1>
                  <ul class="ml-2">
                    <li
                      v-for="(task, index) in exp.responsibilities"
                      :key="index"
                      class="text-sm"
                    >
                      <p>
                        • <span class="ml-1">{{ task.summary }}</span>
                      </p>

                      <ul class="ml-1">
                        <li
                          v-for="(detail, index) in task.details"
                          :key="index"
                          class="text-sm"
                        >
                          - {{ detail }}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <!-- Education -->
          <section class="pb-4">
            <div class="container">
              <h1
                class="border-b-2 py-2 border-sky-900 text-md text-sky-950 font-bold"
              >
                EDUCATION
              </h1>
              <div v-for="(educ, index) in education" :key="index">
                <h1 class="text-sm">{{ educ }}</h1>
              </div>
            </div>
          </section>
        </div>
      </div>
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

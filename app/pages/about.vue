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
              About Me
            </h1>
            <p class="text-xl lg:text-2xl mb-4 text-balance">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
            <p class="text-md lg:text-md mb-4 text-balance">
              {{ summary }}
            </p>
          </div>
        </div>
      </section>
      <section class="pb-4">
        <div class="container">
          <div>
            <p class="text-xl lg:text-2xl pb-2 text-balance">SKILLS</p>
            Technical Skills Strong Analytical & Problem-Solving Abilities
            Exceptional Attention to Detail Effective Collaboration &
            Communication Skills
            <h1 class="pt-2 font-extrabold">Technical Skills</h1>
            <ul class="ml-2 p-2">
              <li class="p-1">
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                /><b>Programming Languages</b> : Proficient in Visual Basic, C#,
                Java, JavaScript, PHP, and SQL for developing robust, scalable
                applications and database solutions.
              </li>
              <li class="p-1">
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                /><b>Frameworks & Libraries</b> : Experienced in building modern
                web applications using Laravel (PHP framework) and Vue.js
                (JavaScript framework).
              </li>
              <li class="p-1">
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                /><b>ERP Systems</b> : Skilled in implementing and customizing
                SAP Business One for business process optimization, and creating
                detailed reports using SAP Crystal Reports.
              </li>
            </ul>

            <div class="ml-2 p-2">
              <Icon
                name="skill-icons:javascript"
                style="color: black"
                class="w-10 h-10 mr-1.5"
              />
              <Icon
                name="skill-icons:html"
                style="color: black"
                class="w-10 h-10 mr-1.5"
              />
              <Icon
                name="logos:vue"
                style="color: black"
                class="w-10 h-10 mr-1.5"
              />
              <Icon
                name="skill-icons:laravel-light"
                style="color: black"
                class="w-10 h-10 mr-1.5"
              />
              <Icon
                name="skill-icons:dotnet"
                style="color: black"
                class="w-10 h-10 mr-1.5"
              />
              <Icon
                name="skill-icons:cpp"
                style="color: black"
                class="w-10 h-10 mr-1.5"
              />
              <Icon
                name="skill-icons:php-dark"
                style="color: black"
                class="w-10 h-10 mr-1.5"
              />
              <Icon
                name="logos:sap"
                style="color: black"
                class="w-10 h-10 mr-1.5"
              />
            </div>
            <h1 class="pt-2 font-extrabold">Soft Skills</h1>
            <ul class="ml-2 p-2">
              <li class="p-1">
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                <b>Analytical & Problem-Solving</b> : Proven ability to analyze
                complex problems, identify root causes, and deliver effective,
                data-driven solutions.
              </li>
              <li class="p-1">
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                <b>Attention to Detail</b> : Meticulous in ensuring accuracy and
                quality in code, documentation, and system configurations.
              </li>
              <li class="p-1">
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                <b>Collaboration & Communication</b>
                : Strong team player with excellent interpersonal skills,
                capable of working effectively with cross-functional teams and
                stakeholders.
              </li>
              <li class="p-1">
                <Icon
                  name="ion:ellipse-sharp"
                  style="color: black"
                  class="w-2 h-2 mr-1.5"
                />
                <b>Adaptability & Learning Agility</b>
                : Quick to learn new technologies and adapt to evolving project
                requirements in fast-paced environments.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// import { jsPDF } from "jspdf";

// import data from "../pages/data/data.json";
// import { onMounted, ref, computed, watch, onBeforeUnmount } from "vue";
// definePageMeta({
//   layout: "default",
// });
// import { useDownloadStore } from "~~/stores/downloadStore";

// const techSkills = ref([]);
// const skillIcon = ref([]);
// const softSkill = ref([]);
// const xp = ref([]);
// const education = ref({});
// const info = ref({});
// const summary = ref("");
// const currentYear = new Date().getFullYear();
// const downloadCV = () => {
//   const downloadStore = useDownloadStore();
//   downloadStore.triggerDownload();
// };
// const printCV = () => {
//   const downloadStore = useDownloadStore();
//   downloadStore.triggerPrint();
// };

// onMounted(() => {
//   //
//   techSkills.value = data.technicalSkills;
//   skillIcon.value = data.skillIcon;
//   softSkill.value = data.skill;
//   xp.value = data.experience;
//   education.value = data.education;
//   info.value = data.info;
//   summary.value = data.summary;
// });
</script>

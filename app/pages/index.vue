<template>
  <div>
    <main>
      <section class="bg-[#f1f1f1]">
        <div
          class="container flex flex-col lg:flex-row items-center py-20 gap-10"
        >
          <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
              Anthony Caballero
            </h1>
            <p class="text-xl lg:text-2xl mb-4 text-balance">
              Full-Stack Developer
            </p>
            <p class="text-sm lg:text-md mb-8 text-balance">
              Full-Stack Developer with expertise in front-end and back-end
              technologies like VB.NET, SAP B1, Crystal Reports, Laravel, and
              Vue.js. Skilled in database design, system optimization, and cloud
              infrastructure (AWS EC2). Proven ability to deliver scalable,
              user-friendly applications and streamline business processes.
              Experienced in report generation, query optimization, and full
              development lifecycle from design to deployment.
            </p>
          </div>
          <div class="flex-1 order-1 lg:order-2">
            <NuxtImg
              sizes="xs:50vw sm:667px"
              src="/acdc.png"
              format="webp"
              densities="x1"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<script setup></script>

<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="56px" src="/acdc.png" format="webp" alt="" />
        <span class="text-xl font-bold">Nuxt-ACDC</span>
      </NuxtLink>
      <ul class="flex items-center gap-6 ml-auto text-md font-bold capitalize">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/MyResume">Resume</NuxtLink>
        </li>
        <!-- <li v-if="!user">
          <a href="" to="/login">Login</a>
        </li> -->
      </ul>
    </nav>
  </header>
</template>

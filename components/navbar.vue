<template>
  <div>
    <nav class="flex flex-wrap shadow-md p-5 justify-between gap-6 bg-[#ffffff] text-sm">
      <div class="flex gap-6 items-center">
        <img width="80" height="80" src="/images/upwork.svg" alt="macbook15" />
        <div class="hidden md:flex gap-6">
          <NuxtLink to="/">Find talent</NuxtLink>
          <NuxtLink to="/">Find work</NuxtLink>
          <NuxtLink to="/">Why Upwork</NuxtLink>
          <NuxtLink to="/">What's New</NuxtLink>
          <NuxtLink to="/">Enterprise</NuxtLink>
        </div>
      </div>

      <button class="md:hidden" @click="toggleMenu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <div class="hidden md:flex gap-6">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/">Iphones</NuxtLink>
        <NuxtLink to="/">AirPods</NuxtLink>
        <NuxtLink to="/">Macbooks</NuxtLink>
        <NuxtLink to="/">Total Purchasing</NuxtLink>
      </div>
    </nav>

    <div v-if="isMenuOpen" class="md:hidden flex flex-col gap-2 p-5 bg-[#ffffff] shadow-md">
      <NuxtLink to="/">Find talent</NuxtLink>
      <NuxtLink to="/">Find work</NuxtLink>
      <NuxtLink to="/">Why Upwork</NuxtLink>
      <NuxtLink to="/">What's New</NuxtLink>
      <NuxtLink to="/">Enterprise</NuxtLink>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/">Iphones</NuxtLink>
      <NuxtLink to="/">AirPods</NuxtLink>
      <NuxtLink to="/">Macbooks</NuxtLink>
      <NuxtLink to="/">Total Purchasing</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
</style>

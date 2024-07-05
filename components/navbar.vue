<template>
  <div class=" fixed w-full lg:-mt-[150px] " style="z-index: 1000000;">
    <nav class="flex flex-wrap shadow-md p-5 justify-between gap-6 bg-[#ffffff] text-sm">
      <div class="flex gap-6 items-center">
        <img width="80" height="80" src="/images/upwork.svg" alt="macbook15" />
        <div class="hidden md:flex gap-6">
          <NuxtLink class="flex" to="/">Find talent <svg class="w-3 h-3 mt-1 ml-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
</svg>
</NuxtLink>
          <NuxtLink class="flex" to="/">Find work  <svg class="w-3 h-3 mt-1 ml-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
</svg></NuxtLink>
          <NuxtLink class="flex" to="/">Why Upwork  <svg class="w-3 h-3 mt-1 ml-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
</svg></NuxtLink>
          <NuxtLink class="flex" to="/">What's New  <svg class="w-3 h-3 mt-1 ml-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
</svg></NuxtLink>
          <NuxtLink class="flex" to="/">Enterprise <svg class="w-3 h-3 mt-1 ml-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
</svg></NuxtLink>
        </div>
      </div>

      <button class="md:hidden" @click="toggleMenu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <div class="hidden md:flex gap-6">
        <form class="flex items-center">
          <button class="flex items-center justify-center p-[9.9px] border border-gray-300 rounded-l-3xl border-r-0">
            <svg aria-hidden="true" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 4a6 6 0 015.678 8.054l5.042 5.042a1 1 0 01-1.414 1.414l-5.042-5.042A6 6 0 1110 4z" />
            </svg>
          </button>
          <input type="text" id="search"
            class="px-4 py-2 border-l-[0px] border-t border-b border-r border-gray-300 focus:ring-0 focus:outline-none"
            placeholder="Search..." />
          <span class="px-4 py-2 border-t border-b border-r border-gray-300 rounded-r-3xl">
            Talent</span>
          <NuxtLink to="/" class="pl-6 pr-6">Log in</NuxtLink>
          <AppButton size="sm" rounded="lg" class="px-6" @click="handleClick">Sign up</AppButton>
        </form>
      </div>
    </nav>

    <div v-if="isMenuOpen" class="md:hidden flex flex-col gap-2 p-5 bg-[#ffffff] shadow-md text-center">
      <NuxtLink class="flex justify-center" to="/">Find talent <svg class="w-3 h-3 mt-1 ml-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
</svg></NuxtLink>
      <NuxtLink class="flex justify-center" to="/">Find work <svg class="w-3 h-3 mt-1 ml-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
</svg></NuxtLink>
      <NuxtLink class="flex justify-center " to="/">Why Upwork <svg class="w-3 h-3 mt-1 ml-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
</svg></NuxtLink>
      <NuxtLink class="flex justify-center" to="/">What's New <svg class="w-3 h-3 mt-1 ml-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
</svg></NuxtLink>
      <NuxtLink class="flex justify-center" to="/">Enterprise <svg class="w-3 h-3 mt-1 ml-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7"/>
</svg></NuxtLink>
      <form class="flex items-center justify-center">
        <button class="flex items-center justify-center p-[12px] border border-gray-300 rounded-l-3xl border-r-0">
          <svg aria-hidden="true" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 4a6 6 0 015.678 8.054l5.042 5.042a1 1 0 01-1.414 1.414l-5.042-5.042A6 6 0 1110 4z" />
          </svg>
        </button>
        <input type="text" id="search"
          class="px-4 py-2 border-l-[0px] border-t border-b border-r border-gray-300 focus:ring-0 focus:outline-none"
          placeholder="Search..." />
        <span class="px-4 py-2 border-t border-b border-r border-gray-300 rounded-r-3xl">
          Talent</span>
      </form>
      <NuxtLink to="/" class="pl-6 pr-6">Log in</NuxtLink>
      <AppButton size="sm" rounded="lg" class="px-6" @click="handleClick">Sign up</AppButton>
    </div>
  </div>
  <SecondNavbar/>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped></style>

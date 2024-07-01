<template><div >
    <nav class="flex shadow-lg p-5 justify-center gap-6  bg-[#2a0040] text-[#f5f5f5] text-lg ">
    <NuxtLink to="/" >Home</NuxtLink>
    <NuxtLink to="/iphone">Iphones</NuxtLink>
    <NuxtLink to="/airpods">AirPods</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <p>cart ({{ cart.length }})</p>
  </nav>
  </div></template>
  <script setup>
import { useCart } from '~/composable/states';

const cart = useCart();
</script>
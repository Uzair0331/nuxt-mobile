<template><div >
    <nav class="flex shadow-lg p-5 justify-center gap-6  bg-purple-900 text-white text-lg ">
    <NuxtLink to="/" >Home</NuxtLink>
    <NuxtLink to="/iphone">Iphones</NuxtLink>
    <NuxtLink to="about">about</NuxtLink>
    <p>cart ({{ cart.length }})</p>
  </nav>
  </div></template>
  <script setup>
import { useCart } from '~/composable/states';

const cart = useCart();
</script>
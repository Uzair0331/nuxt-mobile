<template>
    <div class=" text-center text-xl font-semibold mt-4">All Iphones</div>
    <div class="grid grid-cols-4 gap-4 m-5">
        <NuxtLink to="iphone/iphone-14-pro" class=" shadow-lg text-center border rounded-lg  ">
        <h1 class="mt-2">Iphone 14 pro </h1>
        <div class="flex justify-center">
        <img class="mt-2" width="250" src="/images/iphone-14-pro.jpg" alt="iphone13-mini">
    </div>
    </NuxtLink>
    <NuxtLink to="iphone/iphone-14-plus" class=" shadow-lg text-center border rounded-lg  ">
        <h1 class="mt-2">Iphone 14 plus </h1>
        <div class="flex justify-center">
        <img class="mt-2"  src="/images/iphone-14-plus.jpg" alt="iphone13">
    </div>
    </NuxtLink>
    <NuxtLink to="iphone/iphone-13" class=" shadow-lg text-center border rounded-lg  ">
        <h1 class="mt-2">Iphone 13 </h1>
        <div class="flex justify-center">
        <img class="mt-2" src="/images/iphone13p.webp" alt="iphone13">
    </div>
    </NuxtLink>
    <NuxtLink to="iphone/iphone-13-mini" class=" shadow-lg text-center border rounded-lg  ">
        <h1 class="mt-2">Iphone 13 mini </h1>
        <div class="flex justify-center">
        <img class="mt-2"  src="/images/iphone13-mini.webp" alt="iphone13-mini">
    </div>
    </NuxtLink>
   
    </div>
   
</template>
<script setup>
useHead({
    title :"Nuxt - Iphone"
})
</script>
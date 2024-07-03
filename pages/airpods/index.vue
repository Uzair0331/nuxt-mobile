<template>
    <div class=" text-center text-xl font-semibold mt-4">All Apple AirPods</div>
    <div class="grid grid-cols-4 gap-4 m-5">
        <NuxtLink to="airpods/aipod-pro-1st" class=" shadow-lg text-center border rounded-lg  ">
        <h1 class="mt-2">Airpod pro 1st gen </h1>
        <div class="flex justify-center">
        <img class="mt-2" width="250" src="/images/aipod-pro-1st.jpg" alt="iphone13-mini">
    </div>
    </NuxtLink>
    <NuxtLink to="airpods/aipod-pro-2nd" class=" shadow-lg text-center border rounded-lg  ">
        <h1 class="mt-2">Airpod pro 2nd gen </h1>
        <div class="flex justify-center">
        <img class="mt-2" width="250"  src="/images/airpod-pro-2nd.jpg" alt="iphone13">
    </div>
    </NuxtLink>
    <NuxtLink to="airpods/aipod-pro-3rd" class=" shadow-lg text-center border rounded-lg  ">
        <h1 class="mt-2">Airpod pro 3rd gen</h1>
        <div class="flex justify-center">
        <img class="mt-2" width="220" src="/images/airpod-pro-3rd.jpg" alt="iphone13">
    </div>
    </NuxtLink>
    <NuxtLink to="airpods/aipod-max" class=" shadow-lg text-center border rounded-lg  ">
        <h1 class="mt-2">Airpod max  </h1>
        <div class="flex justify-center">
        <img class="mt-2" width="250" src="/images/airpod-max.jpg" alt="iphone13-mini">
    </div>
    </NuxtLink>
   
    </div>
   
</template>
<script setup>
useHead({
    title :"Nuxt - Iphone"
})
</script>
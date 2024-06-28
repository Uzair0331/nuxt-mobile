<template>
    <div>All Iphones</div>
    <div class="grid grid-cols-4 gap-4 m-5">
        <NuxtLink to="iphone/iphone-13-mini" class=" shadow-lg text-center border rounded-lg  ">
        <h1>Iphone 13 mini </h1>
        <div class="flex justify-center">
        <img width="500" height="500" src="/images/iphone13-mini.webp" alt="iphone13-mini">
    </div>
    </NuxtLink>
    <NuxtLink to="iphone/iphone-13" class=" shadow-lg text-center border rounded-lg  ">
        <h1>Iphone 13 </h1>
        <div class="flex justify-center">
        <img width="500" height="500" src="/images/61l9ppRIiqL._FMwebp__.webp" alt="iphone13">
    </div>
    </NuxtLink>
    </div>
   
</template>
<script setup>
useHead({
    title :"Nuxt - Iphone"
})
</script>
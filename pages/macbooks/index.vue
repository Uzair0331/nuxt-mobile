<template>
    <div class=" text-center text-xl font-semibold mt-4">MacBooks</div>
    <div class="grid grid-cols-4 gap-4 m-5">
        <NuxtLink to="macbooks/macbook-15" class=" shadow-lg text-center border rounded-lg  ">
        <h1 class="mt-2">MackBook Air m3 15-inch</h1>
        <div class="flex justify-center">
        <img class="mt-2" width="250" src="/images/macbook15.jpg" alt="macbook-15">
    </div>
    </NuxtLink>
    <NuxtLink to="macbooks/mackbook-pro-13in" class=" shadow-lg text-center border rounded-lg  ">
        <h1 class="mt-2">MackBook Pro 13in</h1>
        <div class="flex justify-center">
        <img class="mt-2" width="250"  src="/images/mackbook13pro.jpg" alt="mackbook13pro">
    </div>
    </NuxtLink>
    <NuxtLink to="macbooks/mackbook-m2-pro" class=" shadow-lg text-center border rounded-lg  ">
        <h1 class="mt-2">MackBook M2 Pro </h1>
        <div class="flex justify-center">
        <img class="mt-2" width="220" src="/images/macbookm2pro.webp" alt="mackbook-m2-pro">
    </div>
    </NuxtLink>
    <NuxtLink to="macbooks/macbook-air" class=" shadow-lg text-center border rounded-lg  ">
        <h1 class="mt-2">MacBook Air MVFK2LLA</h1>
        <div class="flex justify-center">
        <img class="mt-2" width="250" src="/images/macbookair.jpg" alt="macbook-air">
    </div>
    </NuxtLink>
   
    </div>
   
</template>
<script setup>
useHead({
    title :"Nuxt - Iphone"
})
</script>
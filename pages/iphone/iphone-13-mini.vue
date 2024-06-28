<template>
  <div>
    <div class="flex justify-center w-full ">
      <img
        width="550"
        height="450"
        src="/images/iphone13-mini.webp"
        alt="iphone13-mini"
      />
    </div>
    <div class="text-center">
      <h1 class="text-3xl -mt-10" >Iphone 13 mini</h1>
      <button @click="addToCart" class="p-3 bg-purple-900 text-white rounded-lg mt-3">Buy now</button>
    </div>
  </div>
</template>
<script setup>
import { useCart } from '~/composable/states';

const cart =useCart();
function addToCart() {
    cart.value.push({
        name :`iphone-13-mini`
    })
}
</script>
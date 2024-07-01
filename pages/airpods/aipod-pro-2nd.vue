<template>
    <div>
    <div v-if="alertMessage" class="text-center p-3 bg-red-500 text-white">
      {{ alertMessage }}
    </div>
    <div class="flex justify-center w-full items-center space-x-10 mt-10">
      <img
        width="350"
        height="350"
        src="/images/airpod-pro-2nd.jpg"
        alt="airpod-pro-2nd"
      />
      <div class="text-center">
        <h1 class="text-3xl mb-4">Airpod pro 2nd gen </h1>
        <div class="flex flex-col">
          <button @click="addToCart" class="p-3 bg-[#2a0040] text-white rounded-lg mt-3">Buy now</button>
          <button @click="removeFromCart" class="p-3 bg-[#7a303b] text-white rounded-lg mt-3">Remove item</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCart } from '~/composable/states';
const fullname = computed(()=>{
    return name = `airpod-pro-2nd`
})
const cart =useCart();
const alertMessage = ref('');

function addToCart() {
  const found = cart.value.find(ct => ct.name === fullname.value);
  if (!found) {
    cart.value.push({
      name: fullname.value
    });
    alertMessage.value = '';
  } else {
    alertMessage.value = 'You have already added this item to the cart.';
  }
}

function removeFromCart() {
  const index = cart.value.findIndex(ct => ct.name === fullname.value);
  if (index !== -1) {
    cart.value.splice(index, 1);
    alertMessage.value = '';
  }
}
</script>
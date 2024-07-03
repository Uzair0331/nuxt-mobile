<template>
  <div>
    <div v-if="alertMessage" class="text-center p-3 bg-red-500 text-white">
      {{ alertMessage }}
    </div>
    <div class="flex justify-center w-full items-center space-x-10 mt-10">
      <img
        width="350"
        height="350"
        src="/images/macbook15.jpg"
        alt="macbook15"
      />
      <div class="text-center">
        <h1 class="text-3xl mb-4">MacBook Air m3 15-inch</h1>
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
const fullname = computed(() => `macbook-15`);
const cart = useCart();
const alertMessage = ref('');
const productImage = '/images/macbook15.jpg';

function addToCart() {
  const found = cart.value.find(ct => ct.name === fullname.value);
  if (!found) {
    cart.value.push({
      name: fullname.value,
      image: productImage,
      quantity: 1
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

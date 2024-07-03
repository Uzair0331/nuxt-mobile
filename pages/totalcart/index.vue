<template>
    <div class="p-6">
      <h1 class="text-2xl mb-4">Cart</h1>
      <div v-if="cart.length > 0">
        <div v-for="(item, index) in cart" :key="index" class="mb-4 p-4 border rounded">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img :src="item.image" alt="Item Image" class="w-36 h-26 mr-4"/>
              <div>
                <h2 class="text-xl">{{ item.name }}</h2>
                <p>Quantity: {{ item.quantity }}</p>
              </div>
            </div>
            <button @click="removeFromCart(item)" class="p-2 bg-red-500 text-white rounded">Remove</button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCart } from '~/composable/states';
  const cart = useCart();
  
  function removeFromCart(item) {
    const index = cart.value.findIndex(ct => ct.name === item.name);
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  }
  </script>
  
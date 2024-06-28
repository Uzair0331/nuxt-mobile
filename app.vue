<script setup lang="ts">
import Navbar from './components/navbar.vue';
</script>

<template>
  <!-- <button @click="view('Home')" >Home</button>
  <button @click="view('Counter')">Counter</button>
  <LazyHome v-if="page === 'Home'"/>
  <LazyCounter v-if="page === 'Counter'"/> -->
 
  <Navbar/>
 <slot></slot>
  <NuxtPage/>
 
</template>
<!-- <script setup>
const page = ref("Home");
function view(name){
  page.value = name; 
}

</script> -->


<template>
      <div style="display: flex; display: list-item; text-align: center">
   
    <button @click="increament">Increament</button>
    <p>{{ count }}</p>
    <button @click="decreament">Decreament</button>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increament() {
      this.count++;
    },
    decreament() {
      this.count--;
    },
  },
};
</script>


<!-- <script setup>
const count = ref (0)

function increament() {
  count.value++
}

function decreament() {
  count.value--
}
</script> -->


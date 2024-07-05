<template>
  <button :class="[
    'px-4 py-2 font-semibold text-center transition-colors duration-300',
    sizeClass,
    roundedClass,
    {
      'bg-green text-[#108a00]] hover:bg-white hover:text-green': true
    }
  ]" @click="onClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'CustomButton',
  props: {
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    rounded: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    }
  },
  computed: {
    sizeClass() {
      switch (this.size) {
        case 'sm':
          return 'text-sm';
        case 'lg':
          return 'text-lg';
        default:
          return 'text-md';
      }
    },
    roundedClass() {
      switch (this.rounded) {
        case 'sm':
          return 'rounded-sm';
        case 'lg':
          return 'rounded-lg';
        case '2xl':
          return 'rounded-2xl';
        default:
          return 'rounded-md';
      }
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    }
  }
}
</script>

<style scoped>
.bg-green {
  border-color: #108a00;
  border: solid 1px;
  background-color: white;
}

.text-green {
  color: #108a00;
}

.hover\:bg-white:hover {
  background-color: #108a00;
  border-color: #108a00;
  border: solid 1px;
}

.hover\:text-green:hover {
  color: white;
}
</style>
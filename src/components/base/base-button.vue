<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: String,
  color: String,
});

const size = computed(() => {
  return {
    md: 'px-3 py-1.5 text-sm rounded-md',
  }[props.size];
});
const color = computed(() => {
  return {
    'white-bordered':
      'border border-gray-200 border border-gray-200 bg-white text-gray-900',
  }[props.color];
});
</script>

<template>
  <button :class="[size, color]">
    <slot />
  </button>
</template>

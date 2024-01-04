<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: String,
  color: String,
  fullwidth: Boolean,
});

const size = computed(() => {
  return {
    md: 'px-3 py-1.5 text-sm rounded-md',
  }[props.size];
});
const color = computed(() => {
  return {
    'white-bordered':
      'border border-gray-200 border-gray-200 bg-white text-gray-900',
    sky: 'border border-sky-600 bg-sky-600 text-white hover:bg-sky-500 hover:border-sky-500',
  }[props.color];
});
</script>

<template>
  <button :class="[size, color, fullwidth && 'w-full']">
    <slot />
  </button>
</template>

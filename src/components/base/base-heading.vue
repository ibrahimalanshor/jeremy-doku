<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: String,
  color: String,
  tight: Boolean,
});

const tag = computed(() => {
  return {
    '4xl': 'h1',
    md: 'h6',
  }[props.size];
});
const size = computed(() => {
  return {
    '4xl': 'text-4xl',
    md: 'text-base',
  }[props.size];
});
const color = computed(() => {
  return {
    white: 'text-white',
  }[props.color];
});
</script>

<template>
  <component
    :is="tag"
    :class="[size, color, 'font-bold', tight && 'tracking-tight']"
  >
    <slot />
  </component>
</template>

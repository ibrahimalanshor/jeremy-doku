<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: String,
  color: String,
  tight: Boolean,
  weight: String,
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
const weight = computed(() => {
  return {
    bold: 'font-bold',
    semibold: 'font-semibold',
  }[props.weight];
});
</script>

<template>
  <component
    :is="tag"
    :class="[size, color, weight, tight && 'tracking-tight']"
  >
    <slot />
  </component>
</template>

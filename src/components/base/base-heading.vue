<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: String,
  color: String,
});

const tag = computed(() => {
  return {
    small: 'h6',
  }[props.size];
});
const size = computed(() => {
  return {
    small: 'text-base',
  }[props.size];
});
const color = computed(() => {
  return {
    white: 'text-white',
  }[props.color];
});
</script>

<template>
  <component :is="tag" :class="[size, color, 'font-bold']">
    <slot />
  </component>
</template>

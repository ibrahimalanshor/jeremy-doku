<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: String,
  size: String,
});

const color = computed(() => {
  return {
    white: 'text-white',
  }[props.color];
});
const size = computed(() => {
  return {
    sm: 'text-sm',
    xs: 'text-xs',
  }[props.size];
});
</script>

<template>
  <a href="" :class="[size, color]"><slot /></a>
</template>

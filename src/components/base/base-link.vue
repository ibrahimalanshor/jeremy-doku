<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: String,
});

const color = computed(() => {
  return {
    white: 'text-white',
  }[props.color];
});
</script>

<template>
  <a href="" :class="['text-sm', color]"><slot /></a>
</template>

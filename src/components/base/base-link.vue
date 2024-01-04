<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: String,
  size: String,
  to: null,
  underlined: Boolean,
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
  <router-link
    v-if="to"
    :to="to"
    :class="[size, color, underlined && 'hover:underline']"
    ><slot
  /></router-link>
  <a v-else href="" :class="[size, color, underlined && 'hover:underline']"
    ><slot
  /></a>
</template>

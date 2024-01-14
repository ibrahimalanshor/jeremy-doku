<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: String,
  size: String,
  to: null,
  underlined: Boolean,
  href: null,
});

const color = computed(() => {
  return {
    white: 'text-white',
    sky: 'text-sky-600',
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
  <a
    v-else
    :href="href"
    target="_blank"
    :class="[size, color, underlined && 'hover:underline']"
    ><slot
  /></a>
</template>

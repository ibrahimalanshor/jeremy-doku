<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: String,
  noOutline: Boolean,
});

const size = computed(() => {
  return {
    lg: 'px-3.5 py-2.5 rounded-xl text-sm leading-0',
  }[props.size];
});
</script>

<template>
  <input
    type="search"
    :class="[
      size,
      'w-full text-gray-700',
      noOutline && 'border-0 focus:outline-0 focus:ring-0',
    ]"
    placeholder="Cari Cabang Komunitas"
  />
</template>

<script setup>
import BaseHeading from './base-heading.vue';

defineProps({
  title: String,
});
</script>

<template>
  <div class="bg-white border rounded-lg">
    <div class="p-4 border-b">
      <base-heading size="md" weight="semibold">{{ title }}</base-heading>
      <slot name="actions" />
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>

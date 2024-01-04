<script setup>
defineProps({
  centered: Boolean,
});
</script>

<template>
  <div
    :class="[
      'border-b border-gray-200 pb-6 flex items-center',
      centered ? 'justify-center' : 'justify-between',
    ]"
  >
    <slot name="start" />
    <slot name="end" />
  </div>
</template>

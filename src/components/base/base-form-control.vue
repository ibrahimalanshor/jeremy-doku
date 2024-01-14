<script setup>
defineProps({
  label: String,
});
</script>

<template>
  <div>
    <label class="block text-sm font-semibold mb-2">{{ label }}</label>
    <slot />
  </div>
</template>

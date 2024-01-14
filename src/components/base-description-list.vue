<script setup>
defineProps({
  label: String,
  text: String,
});
</script>

<template>
  <div>
    <dt class="text-sm font-medium leading-6 text-gray-900">{{ label }}</dt>
    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{{ text }}</dd>
  </div>
</template>

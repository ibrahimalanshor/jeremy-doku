<script setup>
defineProps({
  subtitle: String,
  title: String,
  description: String,
});
</script>

<template>
  <div class="border rounded-xl">
    <div class="bg-gray-100 rounded-t-xl h-[150px]"></div>
    <div class="rounded-b-xl p-4">
      <p class="text-xs text-gray-500 mb-1">{{ subtitle }}</p>
      <a href="" class="font-bold text-base block mb-2">{{ title }}</a>
      <p class="text-sm text-gray-700 leading-6">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  subtitle: String,
  title: String,
  description: String,
  image: String,
});
</script>

<template>
  <div class="border rounded-xl flex">
    <div class="bg-gray-100 rounded-l-xl w-[100px] h-full">
      <img
        v-if="image"
        :src="image"
        class="w-full h-full object-cover rounded-l-xl"
      />
    </div>
    <div class="rounded-b-xl p-4">
      <p class="text-xs text-gray-500 mb-1">{{ subtitle }}</p>
      <a href="" class="font-bold text-base block mb-2">{{ title }}</a>
      <p class="text-sm text-gray-700 leading-6">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  subtitle: String,
  title: String,
  description: String,
  image: String,
});
</script>

<template>
  <div class="border rounded-xl md:flex">
    <div
      class="bg-gray-100 rounded-t-xl md:rounded-r-none md:rounded-l-xl h-[200px] md:w-[100px] md:max-h-[120px] md:h-full"
    >
      <img
        v-if="image"
        :src="image"
        class="w-full h-full object-cover rounded-t-xl md:rounded-r-none md:rounded-l-xl"
      />
    </div>
    <div class="rounded-b-xl p-4">
      <p class="text-xs text-gray-500 mb-1">{{ subtitle }}</p>
      <a href="" class="font-bold text-base block mb-2">{{ title }}</a>
      <p class="text-sm text-gray-700 leading-6">{{ description }}</p>
    </div>
  </div>
</template>

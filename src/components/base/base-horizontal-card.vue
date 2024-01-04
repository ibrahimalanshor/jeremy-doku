<script setup>
defineProps({
  subtitle: String,
  title: String,
  description: String,
  image: String,
  hasSubtitle: {
    type: Boolean,
    default: true,
  },
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
      <p v-if="hasSubtitle" class="text-xs text-gray-500 mb-1">
        {{ subtitle }}
      </p>
      <a href="" class="font-bold text-base block mb-2">{{ title }}</a>
      <slot name="description">
        <p class="text-sm text-gray-700 leading-6">{{ description }}</p>
      </slot>
    </div>
  </div>
</template>

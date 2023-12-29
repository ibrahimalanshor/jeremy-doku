<script setup>
defineProps({
  navs: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="py-4 fixed top-0 left-0 w-full">
    <div class="max-w-4xl mx-auto flex items-center justify-between">
      <a href="" class="text-white text-base font-bold">Home</a>
      <ul class="flex items-center gap-x-8">
        <li v-for="nav in navs" :key="nav.id">
          <a href="" class="text-white text-sm">{{ nav.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

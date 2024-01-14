<script setup>
import { XCircleIcon, XMarkIcon } from '@heroicons/vue/20/solid';
import { computed } from 'vue';

const props = defineProps({
  color: String,
  message: String,
});

const icon = computed(() => {
  return {
    red: XCircleIcon,
  }[props.color];
});
const wrapperColor = computed(() => {
  return {
    red: 'bg-red-50',
  }[props.color];
});
const iconColor = computed(() => {
  return {
    red: 'text-red-400',
  }[props.color];
});
const textColor = computed(() => {
  return {
    red: 'text-red-800',
  }[props.color];
});
</script>

<template>
  <div :class="['rounded-md p-4', wrapperColor]">
    <div class="flex">
      <div class="flex-shrink-0">
        <component
          :is="icon"
          :class="['h-5 w-5', iconColor]"
          aria-hidden="true"
        />
      </div>
      <div class="ml-3">
        <p :class="['text-sm font-medium', textColor]">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

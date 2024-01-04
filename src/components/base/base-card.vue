<script setup>
import BaseLink from './base-link.vue';
import BaseHeading from './base-heading.vue';

defineProps({
  subtitle: String,
  title: String,
  description: String,
  image: String,
  to: null,
  hasDescription: {
    type: Boolean,
    default: true,
  },
});

const subtitleClasses = 'text-xs text-gray-500 mb-1';
</script>

<template>
  <div class="border rounded-xl">
    <div class="bg-gray-100 rounded-t-xl h-[200px] md:h-[150px]">
      <img
        v-if="image"
        :src="image"
        class="w-full h-full object-cover rounded-t-xl"
      />
    </div>
    <div class="rounded-b-xl p-4">
      <slot name="subtitle" :classes="{ subtitle: subtitleClasses }">
        <p :class="subtitleClasses">{{ subtitle }}</p>
      </slot>
      <base-link :to="to" underlined>
        <base-heading
          size="md"
          weight="semibold"
          :class="hasDescription && 'mb-2'"
          >{{ title }}</base-heading
        >
      </base-link>
      <p v-if="hasDescription" class="text-sm text-gray-700 leading-6">
        {{ description }}
      </p>
    </div>
  </div>
</template>

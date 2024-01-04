<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: String,
  placeholder: String,
  bordered: Boolean,
  color: String,
  outlined: Boolean,
  modelValue: String,
});
const emit = defineEmits(['input', 'update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
const size = computed(() => {
  return {
    lg: 'px-3.5 py-2.5 rounded-xl text-sm leading-0',
    md: 'px-2.5 py-1.5 rounded-lg text-sm leading-0',
  }[props.size];
});
const focusColor = computed(() => {
  return {
    sky: 'focus:ring-sky-600 focus:border-sky-600',
  }[props.color];
});

function handleInput() {
  emit('input');
}
</script>

<template>
  <input
    type="search"
    :class="[
      size,
      'w-full text-gray-700',
      outlined ? focusColor : 'border-0 focus:outline-0 focus:ring-0',
      bordered && 'border border-gray-300',
    ]"
    :placeholder="placeholder"
    v-model="value"
    v-on:input="handleInput"
  />
</template>

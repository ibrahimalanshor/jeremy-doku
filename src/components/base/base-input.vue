<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  size: String,
  placeholder: String,
  bordered: Boolean,
  color: String,
  outlined: Boolean,
  textarea: Boolean,
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  },
});
const emit = defineEmits(['input', 'update:modelValue']);

const input = ref(null);
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

const params = computed(() => {
  return {
    class: [
      size.value,
      'w-full text-gray-700',
      props.outlined
        ? focusColor.value
        : 'border-0 focus:outline-0 focus:ring-0',
      props.bordered && 'border border-gray-300',
    ],
    placeholder: props.placeholder,
  };
});

function handleInput() {
  emit('input');
}

defineExpose({ input });
</script>

<template>
  <textarea
    v-if="textarea"
    v-bind="params"
    rows="4"
    v-model="value"
    v-on:input="handleInput"
  ></textarea>
  <input
    v-else
    ref="input"
    :type="type"
    v-bind="params"
    v-model="value"
    v-on:input="handleInput"
  />
</template>

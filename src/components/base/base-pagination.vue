<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';
import { computed } from 'vue';

const props = defineProps({
  total: Number,
  page: Number,
});
const emit = defineEmits(['update:page', 'change-page']);

const page = computed({
  get() {
    return props.page;
  },
  set(value) {
    emit('update:page', value);
  },
});

function handleClickItem(value) {
  page.value = value;

  emit('change-page');
}
function handlePrev() {
  if (page.value !== 1) {
    page.value--;

    emit('change-page');
  }
}
function handleNext() {
  if (page.value !== props.total) {
    page.value++;

    emit('change-page');
  }
}
</script>

<template>
  <nav
    class="isolate inline-flex -space-x-px rounded-md"
    aria-label="Pagination"
  >
    <a
      href="#"
      :class="[
        'relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0',
        page === 1 ? 'cursor-default' : '',
      ]"
      v-on:click.prevent="handlePrev"
    >
      <span class="sr-only">Previous</span>
      <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
    </a>
    <a
      v-for="item in total"
      :key="item"
      href="#"
      :class="[
        'relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20',
        item === page
          ? 'z-10 bg-sky-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600'
          : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ',
      ]"
      v-on:click.prevent="handleClickItem(item)"
    >
      {{ item }}
    </a>
    <a
      href="#"
      :class="[
        'relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0',
        page === total ? 'cursor-default' : '',
      ]"
      v-on:click="handleNext"
    >
      <span class="sr-only">Next</span>
      <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
    </a>
  </nav>
</template>

<script setup>
import { Bars4Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import BaseContainer from './base-container.vue';
import BaseHeading from './base-heading.vue';
import BaseLink from './base-link.vue';
import { ref } from 'vue';

const props = defineProps({
  navs: {
    type: Array,
    required: true,
  },
  homeText: String,
  hasHeader: {
    type: Boolean,
    default: true,
  },
});

const navbarMobileVisible = ref(false);

function handleToggleNavbar() {
  navbarMobileVisible.value = !navbarMobileVisible.value;
}

if (props.hasHeader) {
  window.addEventListener('scroll', (e) => {
    const header = document.querySelector('#header');
    const navbar = document.querySelector('#navbar');

    if (
      navbar.clientHeight + document.documentElement.scrollTop >
      header.clientHeight
    ) {
      navbar.classList.add('bg-sky-600', 'with-pattern');
    } else {
      navbar.classList.remove('bg-sky-600', 'with-pattern');
    }
  });
}
</script>

<template>
  <div
    id="navbar"
    :class="[
      'py-4 top-0 left-0 w-full z-10',
      hasHeader ? 'fixed' : 'sticky',
      !hasHeader && 'bg-sky-600 with-pattern',
    ]"
  >
    <base-container>
      <div class="flex items-center justify-between flex-wrap gap-y-2">
        <base-link size="sm" :to="{ name: 'home' }">
          <base-heading weight="semibold" color="white" size="md">{{
            homeText
          }}</base-heading>
        </base-link>
        <button>
          <component
            :is="navbarMobileVisible ? XMarkIcon : Bars4Icon"
            class="sm:hidden w-4 h-4 text-white"
            v-on:click="handleToggleNavbar"
          />
        </button>
        <ul
          :class="[
            navbarMobileVisible
              ? 'w-full sm:w-auto'
              : 'hidden sm:flex sm:w-auto',
            'flex flex-col sm:flex-row gap-x-8 gap-y-1',
          ]"
        >
          <li v-for="nav in navs" :key="nav.id">
            <base-link size="sm" color="white" :to="nav.to">{{
              nav.name
            }}</base-link>
          </li>
        </ul>
      </div>
    </base-container>
  </div>
</template>

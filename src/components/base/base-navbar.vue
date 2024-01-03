<script setup>
import BaseContainer from './base-container.vue';
import BaseHeading from './base-heading.vue';
import BaseLink from './base-link.vue';

defineProps({
  navs: {
    type: Array,
    required: true,
  },
  homeText: String,
});

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
</script>

<template>
  <div id="navbar" class="py-4 fixed top-0 left-0 w-full">
    <base-container>
      <div class="flex items-center justify-between">
        <base-link size="sm">
          <base-heading weight="semibold" color="white" size="md">{{
            homeText
          }}</base-heading>
        </base-link>
        <ul class="flex items-center gap-x-8">
          <li v-for="nav in navs" :key="nav.id">
            <base-link size="sm" color="white">{{ nav.name }}</base-link>
          </li>
        </ul>
      </div>
    </base-container>
  </div>
</template>

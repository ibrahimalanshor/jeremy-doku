<script setup>
import BaseNavbar from 'src/components/base/base-navbar.vue';

const props = defineProps({
  hasHeader: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <base-navbar
    home-text="Home"
    :has-header="hasHeader"
    :navs="[
      { id: 'comunities', name: 'Komunitas', to: { name: 'communities.home' } },
      { id: 'events', name: 'Events' },
      { id: 'login', name: 'Masuk / Daftar' },
    ]"
  />
</template>

<script setup>
import BaseNavbar from 'src/components/base/base-navbar.vue';
import { useAuthStore } from 'src/features/auth/stores/auth';

const props = defineProps({
  hasHeader: {
    type: Boolean,
    default: true,
  },
});

const authStore = useAuthStore();
</script>

<template>
  <base-navbar
    home-text="Home"
    :has-header="hasHeader"
    :navs="[
      { id: 'comunities', name: 'Komunitas', to: { name: 'communities.home' } },
      { id: 'events', name: 'Events', to: { name: 'events.home' } },
      {
        id: 'login',
        name: authStore.isLoggedIn ? 'Dashboard Komunitas' : 'Masuk / Daftar',
        to: { name: 'login' },
      },
    ]"
  />
</template>

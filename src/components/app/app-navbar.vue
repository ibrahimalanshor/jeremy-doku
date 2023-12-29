<script setup>
import BaseNavbar from 'src/components/base/base-navbar.vue';
</script>

<template>
  <base-navbar
    :navs="[
      { id: 'comunities', name: 'Komunitas' },
      { id: 'events', name: 'Events' },
      { id: 'login', name: 'Masuk / Daftar' },
    ]"
  />
</template>

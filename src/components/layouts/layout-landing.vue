<script setup>
import LandingNavbar from 'src/components/landing/landing-navbar.vue';
import LandingHeader from 'src/components/landing/landing-header.vue';
import BaseContainer from 'src/components/base/base-container.vue';

const props = defineProps({
  hasHeader: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <landing-navbar :has-header="hasHeader" />
  <landing-header v-if="hasHeader" />
  <slot />
  <div class="bg-neutral-900 text-white py-4">
    <base-container class="text-center text-sm font-bold">
      Sekolah Hujan
    </base-container>
  </div>
</template>

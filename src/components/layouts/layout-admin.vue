<script setup>
import BaseContainer from 'src/components/base/base-container.vue';
import BaseLink from 'src/components/base/base-link.vue';
import BaseButton from 'src/components/base/base-button.vue';
</script>

<template>
  <div class="bg-gray-100 min-h-screen w-full overflow-auto">
    <div class="bg-white">
      <base-container>
        <div class="flex items-center justify-between py-2">
          <base-link :to="{ name: 'home' }" size="sm" color="sky" underlined
            >Kembali Ke Halaman Utama</base-link
          >
          <base-button size="md" color="white-bordered">Logout</base-button>
        </div>
      </base-container>
    </div>
    <base-container class="py-10">
      <slot />
    </base-container>
  </div>
</template>

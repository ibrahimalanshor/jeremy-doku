<script setup>
import BaseContainer from 'src/components/base/base-container.vue';
import BaseHeading from 'src/components/base/base-heading.vue';
import BaseInput from 'src/components/base/base-input.vue';
import BaseLink from 'src/components/base/base-link.vue';
</script>

<template>
  <header class="bg-sky-600 header text-white py-40">
    <base-container>
      <div class="w-3/4 mx-auto text-center">
        <base-heading class="mb-2" size="4xl" tight
          >Sekolah Air Hujan</base-heading
        >
        <p class="text-base mb-4">
          Bersama memanfaatkan air hujan menjadi sesuatu yang lebih bermanfaat
        </p>
        <base-input class="mb-2" size="lg" no-outline />
        <base-link size="xs">Lihat Semua Cabang</base-link>
      </div>
    </base-container>
  </header>
</template>

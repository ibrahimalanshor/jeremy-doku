<script setup>
import BaseContainer from 'src/components/base/base-container.vue';
import BaseHeading from 'src/components/base/base-heading.vue';
import BaseInput from 'src/components/base/base-input.vue';
import BaseLink from 'src/components/base/base-link.vue';
</script>

<template>
  <header id="header" class="bg-sky-600 with-pattern text-white py-40">
    <base-container>
      <div class="w-full sm:w-3/4 mx-auto text-center">
        <base-heading weight="bold" class="mb-2" size="4xl" tight
          >Sekolah Air Hujan</base-heading
        >
        <p class="text-base mb-4">
          Bersama memanfaatkan air hujan menjadi sesuatu yang lebih bermanfaat
        </p>
        <base-input class="mb-2" size="lg" placeholder="Cari Komunitas" />
        <base-link size="xs">Lihat Semua Komunias</base-link>
      </div>
    </base-container>
  </header>
</template>

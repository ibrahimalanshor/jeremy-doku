<script setup>
import BaseContainer from 'src/components/base/base-container.vue';
</script>

<template>
  <header class="bg-sky-600 header text-white py-40">
    <base-container>
      <div class="w-3/4 mx-auto text-center">
        <h1 class="text-4xl font-bold tracking-tight mb-2">
          Sekolah Air Hujan
        </h1>
        <p class="text-base mb-4">
          Bersama memanfaatkan air hujan menjadi sesuatu yang lebih bermanfaat
        </p>
        <input
          type="search"
          class="mb-2 px-3.5 py-2.5 w-full border-0 rounded-xl focus:outline-0 focus:ring-0 text-gray-700 text-sm leading-0"
          placeholder="Cari Cabang Komunitas"
        />
        <a href="" class="text-xs text-white">Lihat Semua Cabang</a>
      </div>
    </base-container>
  </header>
</template>

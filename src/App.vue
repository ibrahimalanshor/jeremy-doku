<script setup>
import LandingNavbar from 'src/components/landing/landing-navbar.vue';
</script>

<template>
  <landing-navbar />
  <header class="bg-sky-600 header text-white py-40">
    <div class="max-w-4xl mx-auto">
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
    </div>
  </header>
  <div class="max-w-4xl mx-auto py-20 space-y-6">
    <div
      class="border-b border-gray-200 pb-6 flex items-center justify-between"
    >
      <h3 class="text-base font-semibold leading-6 text-gray-900">
        Top Komunitas
      </h3>
      <a
        href=""
        class="px-3 py-1.5 border border-gray-200 bg-white text-gray-900 text-sm rounded-md"
        >Lihat Semua</a
      >
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div v-for="x in 6" :key="x" class="border rounded-xl">
        <div class="bg-gray-100 rounded-t-xl h-[150px]"></div>
        <div class="rounded-b-xl p-4">
          <p class="text-xs text-gray-500 mb-1">Arsenal</p>
          <a href="" class="font-bold text-base block mb-2">Bad Boy</a>
          <p class="text-sm text-gray-700 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            voluptatibus minima repellendus.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-4xl mx-auto py-20 space-y-6">
    <div
      class="border-b border-gray-200 pb-6 flex items-center justify-between"
    >
      <h3 class="text-base font-semibold leading-6 text-gray-900">
        Events Terbaru
      </h3>
      <a
        href=""
        class="px-3 py-1.5 border border-gray-200 bg-white text-gray-900 text-sm rounded-md"
        >Lihat Semua</a
      >
    </div>
    <div class="grid grid-cols-1 gap-6">
      <div v-for="x in 5" :key="x" class="border rounded-xl flex">
        <div class="bg-gray-100 rounded-l-xl w-[100px] h-full"></div>
        <div class="rounded-b-xl p-4">
          <p class="text-xs text-gray-500 mb-1">Arsenal</p>
          <a href="" class="font-bold text-base block mb-2">Bad Boy</a>
          <p class="text-sm text-gray-700 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            voluptatibus minima repellendus.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-neutral-900 text-white py-4">
    <div class="max-w-4xl mx-auto text-center text-sm font-bold">
      Sekolah Hujan
    </div>
  </div>
</template>

<script setup>
import LandingNavbar from 'src/components/landing/landing-navbar.vue';
import LandingHeader from 'src/components/landing/landing-header.vue';
import BaseHeading from 'src/components/base/base-heading.vue';
import BaseButton from 'src/components/base/base-button.vue';
import BaseCard from 'src/components/base/base-card.vue';
import BaseHorizontalCard from 'src/components/base/base-horizontal-card.vue';
</script>

<template>
  <landing-navbar />
  <landing-header />
  <div class="max-w-4xl mx-auto py-20 space-y-6">
    <div
      class="border-b border-gray-200 pb-6 flex items-center justify-between"
    >
      <base-heading size="md" weight="semibold">Top Komunitas</base-heading>
      <base-button size="md" color="white-bordered">Lihat Semua</base-button>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <base-card
        v-for="x in 6"
        :key="x"
        subtitle="Sleman"
        title="Banyu Bening"
        description="Temukan aneka produk Pedal Wah Vox terlengkap yang dapat digunakan untuk berbagai macam brand"
      />
    </div>
  </div>
  <div class="max-w-4xl mx-auto py-20 space-y-6">
    <div
      class="border-b border-gray-200 pb-6 flex items-center justify-between"
    >
      <base-heading size="md" weight="semibold">Events Terbaru</base-heading>
      <base-button size="md" color="white-bordered">Lihat Semua</base-button>
    </div>
    <div class="grid grid-cols-1 gap-6">
      <base-horizontal-card
        v-for="x in 5"
        :key="x"
        subtitle="Sleman"
        title="Banyu Bening"
        description="Temukan aneka produk Pedal Wah Vox terlengkap yang dapat digunakan untuk berbagai macam brand"
      />
    </div>
  </div>
  <div class="bg-neutral-900 text-white py-4">
    <div class="max-w-4xl mx-auto text-center text-sm font-bold">
      Sekolah Hujan
    </div>
  </div>
</template>

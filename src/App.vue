<script setup>
import LandingNavbar from 'src/components/landing/landing-navbar.vue';
import LandingHeader from 'src/components/landing/landing-header.vue';
import BaseHeading from 'src/components/base/base-heading.vue';
import BaseButton from 'src/components/base/base-button.vue';
import BaseCard from 'src/components/base/base-card.vue';
import BaseHorizontalCard from 'src/components/base/base-horizontal-card.vue';
import BaseSectionHeading from 'src//components/base/base-section-heading.vue';
import BaseContainer from 'src/components/base/base-container.vue';
import CommunityGridList from 'src/features/community/components/community-grid-list.vue';
</script>

<template>
  <landing-navbar />
  <landing-header />
  <base-container class="py-20 space-y-6">
    <base-section-heading>
      <template #start>
        <base-heading size="md" weight="semibold">Top Komunitas</base-heading>
      </template>
      <template #end>
        <base-button size="md" color="white-bordered">Lihat Semua</base-button>
      </template>
    </base-section-heading>
    <community-grid-list />
  </base-container>
  <base-container class="py-20 space-y-6">
    <base-section-heading>
      <template #start>
        <base-heading size="md" weight="semibold">Events Terbaru</base-heading>
      </template>
      <template #end>
        <base-button size="md" color="white-bordered">Lihat Semua</base-button>
      </template>
    </base-section-heading>
    <div class="grid grid-cols-1 gap-6">
      <base-horizontal-card
        v-for="x in 5"
        :key="x"
        subtitle="Sleman"
        title="Banyu Bening"
        description="Temukan aneka produk Pedal Wah Vox terlengkap yang dapat digunakan untuk berbagai macam brand"
      />
    </div>
  </base-container>
  <div class="bg-neutral-900 text-white py-4">
    <base-container class="text-center text-sm font-bold">
      Sekolah Hujan
    </base-container>
  </div>
</template>

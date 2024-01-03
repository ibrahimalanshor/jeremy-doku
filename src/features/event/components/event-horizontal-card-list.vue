<script setup>
import BaseHorizontalCard from 'src/components/base/base-horizontal-card.vue';
</script>

<template>
  <div class="grid grid-cols-1 gap-6">
    <base-horizontal-card
      v-for="x in 5"
      :key="x"
      subtitle="Sleman"
      title="Banyu Bening"
      description="Temukan aneka produk Pedal Wah Vox terlengkap yang dapat digunakan untuk berbagai macam brand"
    />
  </div>
</template>

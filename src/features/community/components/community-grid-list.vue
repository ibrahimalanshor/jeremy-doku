<script setup>
import BaseCard from 'src/components/base/base-card.vue';
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <base-card
      v-for="x in 6"
      :key="x"
      subtitle="Sleman"
      title="Banyu Bening"
      description="Temukan aneka produk Pedal Wah Vox terlengkap yang dapat digunakan untuk berbagai macam brand"
    />
  </div>
</template>

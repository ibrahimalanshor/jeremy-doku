<script setup>
import BasePanel from 'src/components/base/base-panel.vue';
import BaseDescriptionList from 'src/components/base-description-list.vue';
</script>

<template>
  <base-panel title="Data Komunitas">
    <div class="grid grid-cols-3 gap-x-8">
      <div class="h-40 bg-gray-200 rounded-lg"></div>
      <base-description-list label="Nama" text="Komunitas Rambut Pirang" />
      <base-description-list label="Lokasi" text="Sleman" />
    </div>
  </base-panel>
</template>

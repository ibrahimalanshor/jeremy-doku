<script setup>
import BaseHeading from 'src/components/base/base-heading.vue';
import BaseButton from 'src/components/base/base-button.vue';
import BaseSectionHeading from 'src//components/base/base-section-heading.vue';
import BaseContainer from 'src/components/base/base-container.vue';
import CommunityCardList from 'src/features/community/components/community-card-list.vue';
import EventHorizontalCardList from 'src/features/event/components/event-horizontal-card-list.vue';
import LayoutHome from 'src/components/layouts/layout-home.vue';
</script>

<template>
  <layout-home>
    <base-container class="py-20 space-y-6">
      <base-section-heading>
        <template #start>
          <base-heading size="md" weight="semibold">Top Komunitas</base-heading>
        </template>
        <template #end>
          <base-button size="md" color="white-bordered"
            >Lihat Semua</base-button
          >
        </template>
      </base-section-heading>
      <community-card-list />
    </base-container>
    <base-container class="py-20 space-y-6">
      <base-section-heading>
        <template #start>
          <base-heading size="md" weight="semibold"
            >Events Terbaru</base-heading
          >
        </template>
        <template #end>
          <base-button size="md" color="white-bordered"
            >Lihat Semua</base-button
          >
        </template>
      </base-section-heading>
      <event-horizontal-card-list />
    </base-container>
  </layout-home>
</template>

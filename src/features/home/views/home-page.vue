<script setup>
import BaseHeading from 'src/components/base/base-heading.vue';
import BaseButton from 'src/components/base/base-button.vue';
import BaseSectionHeading from 'src//components/base/base-section-heading.vue';
import BaseContainer from 'src/components/base/base-container.vue';
import CommunityCardList from 'src/features/community/components/community-card-list.vue';
import EventHorizontalCardList from 'src/features/event/components/event-horizontal-card-list.vue';
import LayoutLanding from 'src/components/layouts/layout-landing.vue';
</script>

<template>
  <layout-landing>
    <base-container class="py-20 space-y-6">
      <community-card-list>
        <template #header-end>
          <router-link :to="{ name: 'communities.home' }">
            <base-button size="md" color="white-bordered"
              >Lihat Semua</base-button
            >
          </router-link>
        </template>
      </community-card-list>
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
  </layout-landing>
</template>

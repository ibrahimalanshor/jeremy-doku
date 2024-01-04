<script setup>
import BaseButton from 'src/components/base/base-button.vue';
import BaseContainer from 'src/components/base/base-container.vue';
import CommunityCardList from 'src/features/community/components/community-card-list.vue';
import EventCardList from 'src/features/event/components/event-card-list.vue';
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
      <event-card-list>
        <template #header-end>
          <router-link :to="{ name: 'events.home' }">
            <base-button size="md" color="white-bordered"
              >Lihat Semua</base-button
            >
          </router-link>
        </template>
      </event-card-list>
    </base-container>
  </layout-landing>
</template>

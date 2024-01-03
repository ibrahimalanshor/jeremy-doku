<script setup>
import BaseHorizontalCard from 'src/components/base/base-horizontal-card.vue';
import { useRequest } from 'src/composes/request.compose';

const { data: events, request } = useRequest('/api/events', {
  initData: {
    data: [],
  },
});

async function loadEvents() {
  try {
    await request({
      params: {
        perPage: 6,
      },
    });
  } catch (err) {}
}

loadEvents();
</script>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-1 gap-6">
    <base-horizontal-card
      v-for="event in events.data"
      :key="event"
      subtitle="Sleman"
      :image="event.image"
      :title="event.name"
      :description="event.description"
    />
  </div>
</template>

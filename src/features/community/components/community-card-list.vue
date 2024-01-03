<script setup>
import BaseCard from 'src/components/base/base-card.vue';
import { useRequest } from 'src/composes/request.compose';

const { data: communities, request } = useRequest('/api/communities', {
  initData: {
    data: [],
  },
});

async function loadCommunities() {
  try {
    await request({
      params: {
        perPage: 6,
      },
    });
  } catch (err) {}
}

loadCommunities();
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <base-card
      v-for="community in communities.data"
      :key="community.id"
      subtitle="Sleman"
      :title="community.name"
      :description="community.description"
      :image="community.image"
    />
  </div>
</template>

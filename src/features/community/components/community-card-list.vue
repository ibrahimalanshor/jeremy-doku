<script setup>
import BaseCard from 'src/components/base/base-card.vue';
import { useRequest } from 'src/composes/request.compose';
import BasePagination from 'src/components/base-pagination.vue';
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

defineProps({
  hasPagination: {
    type: Boolean,
    default: false,
  },
});

const route = useRoute();
const router = useRouter();
const { data: communities, request } = useRequest('/api/communities', {
  initData: {
    data: [],
    meta: {
      last_page: 1,
      current_page: 1,
    },
  },
});

const params = reactive({
  page: route.query.page ? parseInt(route.query.page) : 1,
});

async function loadCommunities() {
  try {
    await request({
      params: {
        perPage: 6,
        page: params.page,
      },
    });
  } catch (err) {}
}

function handleChangePage() {
  router.push({ query: { page: params.page } });

  loadCommunities();
}

loadCommunities();
</script>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    <base-card
      v-for="community in communities.data"
      :key="community.id"
      subtitle="Sleman"
      :title="community.name"
      :description="community.description"
      :image="community.image"
    />
  </div>
  <div v-if="hasPagination" class="flex justify-center">
    <base-pagination
      :total="communities.meta.last_page"
      v-model:page="params.page"
      v-on:change-page="handleChangePage"
    ></base-pagination>
  </div>
</template>

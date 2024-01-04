<script setup>
import BaseHeading from 'src/components/base/base-heading.vue';
import BaseSectionHeading from 'src//components/base/base-section-heading.vue';
import BaseCard from 'src/components/base/base-card.vue';
import BasePagination from 'src/components/base/base-pagination.vue';
import BaseInput from 'src/components/base/base-input.vue';
import { useRequest } from 'src/composes/request.compose';
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
  search: route.query.search ?? null,
});

async function loadCommunities() {
  try {
    await request({
      params: {
        perPage: 6,
        page: params.page,
        search: params.search,
      },
    });
  } catch (err) {}
}

function handleChangePage() {
  router.push({
    query: {
      page: params.page,
      search: params.search,
    },
  });

  loadCommunities();
}
function handleSearch() {
  params.page = 1;

  router.push({
    query: {
      page: params.page,
      search: params.search,
    },
  });

  loadCommunities();
}

loadCommunities();
</script>

<template>
  <div class="space-y-6">
    <base-section-heading>
      <template #start>
        <base-heading size="md" weight="semibold">Top Komunitas</base-heading>
      </template>
      <template #end>
        <slot name="header-end">
          <div>
            <base-input
              size="md"
              placeholder="Search"
              color="sky"
              outlined
              bordered
              v-model="params.search"
              v-on:input="handleSearch"
            />
          </div>
        </slot>
      </template>
    </base-section-heading>
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
  </div>
</template>

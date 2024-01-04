<script setup>
import BaseHeading from 'src/components/base/base-heading.vue';
import BaseSectionHeading from 'src//components/base/base-section-heading.vue';
import BaseHorizontalCard from 'src/components/base/base-horizontal-card.vue';
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
  hasHeading: {
    type: Boolean,
    default: true,
  },
});

const route = useRoute();
const router = useRouter();
const { data: events, request } = useRequest('/api/events', {
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

function setRouteQuery() {
  router.push({
    query: {
      page: params.page,
      search: params.search,
    },
  });
}
async function loadEvents() {
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
  setRouteQuery();
  loadEvents();
}
function handleSearch() {
  params.page = 1;

  setRouteQuery();
  loadEvents();
}

loadEvents();
</script>

<template>
  <div class="space-y-6">
    <base-section-heading v-if="hasHeading">
      <template #start>
        <base-heading size="md" weight="semibold">Event Terbaru</base-heading>
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
    <p v-if="!events.data.length" class="text-gray-700 text-sm">
      Data Tidak Ditemukan
    </p>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
      <base-horizontal-card
        v-for="event in events.data"
        :key="event.id"
        subtitle="Sleman"
        :title="event.name"
        :description="event.description"
        :image="event.image"
      />
    </div>
    <div v-if="hasPagination" class="flex justify-center">
      <base-pagination
        :total="events.meta.last_page"
        v-model:page="params.page"
        v-on:change-page="handleChangePage"
      ></base-pagination>
    </div>
  </div>
</template>

<script setup>
import BaseContainer from 'src/components/base/base-container.vue';
import BaseButton from 'src/components/base/base-button.vue';
import BaseHeading from 'src/components/base/base-heading.vue';
import LayoutLanding from 'src/components/layouts/layout-landing.vue';
import BaseSectionHeading from 'src/components/base/base-section-heading.vue';
import EventHorizontalCardList from 'src/features/event/components/event-horizontal-card-list.vue';
import { useRequest } from 'src/composes/request.compose';
import { useRoute } from 'vue-router';

const { data: community, request } = useRequest('/communities', {
  initData: {
    data: {},
  },
});
const route = useRoute();

async function loadCommunity() {
  try {
    await request({
      url: `/api/communities/${route.params.id}`,
    });
  } catch (err) {
    //
  }
}

loadCommunity();
</script>

<template>
  <layout-landing :has-header="false">
    <base-container class="pt-10 pb-20 space-y-4">
      <base-section-heading>
        <template #start>
          <div class="flex gap-x-4">
            <img
              :src="community.data.image"
              class="w-14 h-14 object-cover rounded-lg"
            />
            <div>
              <span class="text-gray-500 text-xs">{{
                community.data.location
              }}</span>
              <base-heading size="xl" weight="bold">{{
                community.data.name
              }}</base-heading>
            </div>
          </div>
        </template>
        <template #end>
          <router-link :to="{ name: 'communities.home' }">
            <base-button size="md" color="white-bordered">Kembali</base-button>
          </router-link>
        </template>
      </base-section-heading>
      <p class="text-sm text-gray-700 leading-6">
        {{ community.data.description }}
      </p>
      <base-heading size="md" weight="semibold">Event Terbaru</base-heading>
      <event-horizontal-card-list
        v-if="community.data.id"
        :has-heading="false"
        :request-params="{ community_id: community.data.id }"
      />
    </base-container>
  </layout-landing>
</template>

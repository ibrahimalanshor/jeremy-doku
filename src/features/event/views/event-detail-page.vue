<script setup>
import BaseContainer from 'src/components/base/base-container.vue';
import BaseButton from 'src/components/base/base-button.vue';
import BaseHeading from 'src/components/base/base-heading.vue';
import LayoutLanding from 'src/components/layouts/layout-landing.vue';
import BaseSectionHeading from 'src/components/base/base-section-heading.vue';
import EventDescriptionList from 'src/features/event/components/event-description-list.vue';
import { useRequest } from 'src/composes/request.compose';
import { useRoute } from 'vue-router';

const { data: event, request } = useRequest('/events', {
  initData: {
    data: {},
  },
});
const route = useRoute();

async function loadCommunity() {
  try {
    await request({
      url: `/api/events/${route.params.id}`,
      params: {
        includeCommunity: true,
      },
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
              :src="event.data.image"
              class="w-14 h-14 object-cover rounded-lg"
            />
            <div>
              <span class="text-gray-500 text-xs">{{
                event.data.community?.name
              }}</span>
              <base-heading size="xl" weight="bold">{{
                event.data.name
              }}</base-heading>
            </div>
          </div>
        </template>
        <template #end>
          <router-link :to="{ name: 'events.home' }">
            <base-button size="md" color="white-bordered">Kembali</base-button>
          </router-link>
        </template>
      </base-section-heading>
      <p class="text-sm text-gray-700 leading-6">
        {{ event.data.description }}
      </p>
      <event-description-list :event="event.data" has-link />
    </base-container>
  </layout-landing>
</template>

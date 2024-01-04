<script setup>
import { createDate } from 'src/utils/date';
import {
  CalendarDaysIcon,
  MapPinIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline';
import BaseLink from 'src/components/base/base-link.vue';

const props = defineProps({
  event: Object,
  hasLink: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="text-gray-700 text-sm space-y-1">
    <li class="flex items-center">
      <div class="w-6">
        <CalendarDaysIcon class="w-4 h-4" />
      </div>
      {{ createDate(event.date).format('LLL') }}
    </li>
    <li class="flex items-center">
      <div class="w-6">
        <MapPinIcon class="w-4 h-4" />
      </div>
      {{ event.type === 'offline' ? event.location : event.platform }}
    </li>
    <li v-if="hasLink && event.type === 'online'" class="flex items-center">
      <div class="w-6">
        <GlobeAltIcon class="w-4 h-4" />
      </div>
      <base-link :href="event.link" color="sky">{{ event.link }}</base-link>
    </li>
  </div>
</template>

<script setup>
import BaseContainer from 'src/components/base/base-container.vue';
import BaseHeading from 'src/components/base/base-heading.vue';
import LayoutLanding from 'src/components/layouts/layout-landing.vue';
import BaseSectionHeading from 'src/components/base/base-section-heading.vue';
import EventHorizontalCardList from 'src/features/event/components/event-horizontal-card-list.vue';
</script>

<template>
  <layout-landing :has-header="false">
    <base-container class="pt-10 pb-20 space-y-4">
      <base-section-heading>
        <template #start>
          <div class="flex gap-x-4">
            <img
              src="https://images.pexels.com/photos/18980747/pexels-photo-18980747.jpeg?auto=compress&cs=tinysrgb&h=350"
              class="w-14 h-14 object-cover rounded-lg"
            />
            <div>
              <span class="text-gray-500 text-xs">Sleman</span>
              <base-heading size="xl" weight="bold"
                >Romaguera, Kutch and Harris</base-heading
              >
            </div>
          </div>
        </template>
      </base-section-heading>
      <p class="text-sm text-gray-700 leading-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
        voluptas corporis officia esse suscipit a exercitationem aspernatur
        itaque voluptate expedita, eligendi magnam repellat doloremque
        accusantium atque possimus! Voluptates, et nulla!
      </p>
      <base-heading size="md" weight="semibold">Event Terbaru</base-heading>
      <event-horizontal-card-list :has-heading="false" />
    </base-container>
  </layout-landing>
</template>

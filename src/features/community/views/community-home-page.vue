<script setup>
import BaseHeading from 'src/components/base/base-heading.vue';
import BaseSectionHeading from 'src//components/base/base-section-heading.vue';
import BaseContainer from 'src/components/base/base-container.vue';
import CommunityCardList from 'src/features/community/components/community-card-list.vue';
import LayoutLanding from 'src/components/layouts/layout-landing.vue';
</script>

<template>
  <layout-landing :has-header="false">
    <base-container class="pt-10 pb-20 space-y-6">
      <base-section-heading>
        <template #start>
          <base-heading size="md" weight="semibold">Top Komunitas</base-heading>
        </template>
      </base-section-heading>
      <community-card-list has-pagination />
    </base-container>
  </layout-landing>
</template>

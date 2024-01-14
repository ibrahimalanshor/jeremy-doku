<script setup>
import BaseContainer from 'src/components/base/base-container.vue';
import EventCardList from 'src/features/event/components/event-card-list.vue';
import LayoutLanding from 'src/components/layouts/layout-landing.vue';
</script>

<template>
  <layout-landing :has-header="false">
    <base-container class="pt-10 pb-20">
      <event-card-list has-pagination />
    </base-container>
  </layout-landing>
</template>

<script setup>
import LayoutAdmin from 'src/components/layouts/layout-admin.vue';
import DashboardProfilePanel from 'src/features/admin/dashboard/components/dashboard-profile-panel.vue';
import DashboardCompleteRegistrationPanel from 'src/features/admin/dashboard/components/dashboard-complete-registration-panel.vue';
import { useAuthStore } from 'src/features/auth/stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <layout-admin>
    <dashboard-complete-registration-panel
      v-if="!authStore.me.is_registration_complete"
    />
    <template v-else>
      <div class="space-y-6">
        <dashboard-profile-panel />
        <dashboard-profile-panel />
      </div>
    </template>
  </layout-admin>
</template>

export const adminDashboardRoutes = [
  {
    path: '/admin',
    name: 'admin.dashboard',
    component: () =>
      import('src/features/admin/dashboard/views/admin-dashboard-page.vue'),
  },
];

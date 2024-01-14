export const eventRoutes = [
  {
    path: '/events',
    children: [
      {
        path: '',
        name: 'events.home',
        component: () => import('src/features/event/views/event-home-page.vue'),
      },
      {
        path: ':id',
        name: 'events.detail',
        component: () =>
          import('src/features/event/views/event-detail-page.vue'),
      },
    ],
  },
];

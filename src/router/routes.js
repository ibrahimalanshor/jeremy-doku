export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('src/features/home/views/home-page.vue'),
  },
  {
    path: '/communities',
    children: [
      {
        path: '',
        name: 'communities.home',
        component: () =>
          import('src/features/community/views/community-home-page.vue'),
      },
    ],
  },
  {
    path: '/events',
    children: [
      {
        path: '',
        name: 'events.home',
        component: () => import('src/features/event/views/event-home-page.vue'),
      },
    ],
  },
];

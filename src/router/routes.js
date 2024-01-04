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
      {
        path: ':id',
        name: 'communities.detail',
        component: () =>
          import('src/features/community/views/community-detail-page.vue'),
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
      {
        path: ':id',
        name: 'events.detail',
        component: () =>
          import('src/features/event/views/event-detail-page.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('src/features/auth/views/auth-login-page.vue'),
  },
];

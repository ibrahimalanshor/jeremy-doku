export const communityRoutes = [
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
];

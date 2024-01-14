export const homeRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('src/features/home/views/home-page.vue'),
  },
];

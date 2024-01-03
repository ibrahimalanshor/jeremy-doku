export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('src/features/home/views/home-page.vue'),
  },
];

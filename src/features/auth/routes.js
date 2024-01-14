export const authRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('src/features/auth/views/auth-login-page.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('src/features/auth/views/auth-register-page.vue'),
  },
];

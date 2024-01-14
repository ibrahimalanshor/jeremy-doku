import { authRoutes } from 'src/features/auth/routes';
import { eventRoutes } from 'src/features/event/routes';
import { communityRoutes } from 'src/features/community/routes';
import { homeRoutes } from 'src/features/home/routes';
import { adminDashboardRoutes } from 'src/features/admin/dashboard/routes';

export const routes = [
  ...homeRoutes,
  ...communityRoutes,
  ...eventRoutes,
  ...authRoutes,
  ...adminDashboardRoutes,
];

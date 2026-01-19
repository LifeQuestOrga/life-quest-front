import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.page').then((c) => c.DashboardPage),
  },
  {
    path: 'goals',
    loadComponent: () => import('./features/goals/goals.page').then((c) => c.GoalsPage)
  },
  {
    path: 'goal/:goalId',
    loadComponent: () => import('./features/goal-detail/goal-detail.page').then((c) => c.GoalDetailPage)
  }
];

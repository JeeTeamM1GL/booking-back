import { Routes } from '@angular/router';

export const ADMIN_ROUTES : Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', loadChildren: () => import('./pages/login/login.routes').then(m => m.LOGIN_ROUTES) },
  { path: 'myspace', loadChildren: () => import('./layout/layout.routes').then(m => m.LAYOUT_ROUTES) },
];
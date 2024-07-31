import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/myspace' },
  { path: 'myspace', loadChildren: () => import('./layout/layout.routes').then(m => m.LAYOUT_ROUTES) },
];
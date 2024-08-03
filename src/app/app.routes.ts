import { Routes } from '@angular/router';
import { HotelDetailsComponent } from './front/pages/hotel-details/hotel-details.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/booking/welcome' },
  { path: 'booking/hotel-details/:id', component: HotelDetailsComponent },
  { path: 'booking', loadChildren: () => import('./front/main/main.routes').then(m => m.MAIN_ROUTES) },
  { path: 'admin', loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES) },
];
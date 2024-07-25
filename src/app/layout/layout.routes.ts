import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const LAYOUT_ROUTES: Routes = [
  { 
    path: '', 
    component: LayoutComponent ,
    children : [
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: 'welcome', loadChildren: () => import('./../pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
      { path: 'hotels', loadChildren: () => import('./../pages/hotels/hotels.routes').then(m => m.HOTELS_ROUTES) },
      { path: 'bookings', loadChildren: () => import('./../pages/bookings/bookings.routes').then(m => m.BOOKINGS_ROUTES) },
      { path: 'users', loadChildren: () => import('../pages/users/users.routes').then(m => m.USERS_ROUTES) },
      { path: 'my-account', loadChildren: () => import('./../pages/my-account/my-account.routes').then(m => m.MY_ACCOUNT_ROUTES) },
    ]
  },
];
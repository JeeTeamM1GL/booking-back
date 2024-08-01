import { Routes } from '@angular/router';
import { BookingsComponent } from './bookings.component';
import {DetailsComponent} from "./details/details.component";
export const BOOKINGS_ROUTES: Routes = [
  { path: '', component: BookingsComponent },
  { path: 'details-booking', component: DetailsComponent },
];

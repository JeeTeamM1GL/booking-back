import { Routes } from '@angular/router';
import { HotelDetailsComponent } from './hotel-details.component';
export const HOTEL_DETAILS_ROUTES: Routes = [
  { path: 'booking/hotel-details/:id', component: HotelDetailsComponent },
];
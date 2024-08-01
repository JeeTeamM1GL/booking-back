import { Routes } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import {DetailsComponent} from "./details/details.component";
export const HOTELS_ROUTES: Routes = [
  { path: '', component: HotelsComponent },
  {
    path : 'add-hotel',
    component : AddHotelComponent
  },
  {
    path : 'details-hotel',
    component : DetailsComponent
  },
];

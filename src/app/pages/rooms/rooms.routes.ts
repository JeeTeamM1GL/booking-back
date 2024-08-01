import { Routes } from '@angular/router';
import {DetailsComponent} from "./details/details.component";
import {RoomsComponent} from "../rooms/rooms.component";
import {AddRoomComponent} from "../rooms/add-room/add-room.component";
export const ROOMS_ROUTES: Routes = [
  { path: '', component: RoomsComponent },
  {
    path : 'add-room',
    component : AddRoomComponent
  },
  {
    path : 'details-rooms',
    component : DetailsComponent
  },

];

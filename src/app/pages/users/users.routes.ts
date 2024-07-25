import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';

export const USERS_ROUTES: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: '', 
    component: UsersComponent ,
  },
  {
    path : 'add-user',
    component : AddUserComponent
  }
];
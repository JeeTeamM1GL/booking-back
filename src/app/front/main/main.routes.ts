import { Routes } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MainComponent } from './main.component';
export const MAIN_ROUTES: Routes = [ 
    {
        path: "",
        component : MainComponent ,
        children : [
            { path: '', pathMatch: 'full', redirectTo: '/welcome' },
            { path: 'welcome', loadChildren: () => import('./../pages/home/home.routes').then(m => m.HOME_ROUTES) },
            { path: 'hotel-details', loadChildren: () => import('./../pages/hotel-details/hotel-details.routes').then(m => m.HOTEL_DETAILS_ROUTES) },
        ]
    }
    
];
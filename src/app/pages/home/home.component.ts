import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HotelItemComponent } from '../../components/hotel-item/hotel-item.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzTabsModule , NavbarComponent, NzListModule , NzGridModule , HotelItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
  ];

  
}
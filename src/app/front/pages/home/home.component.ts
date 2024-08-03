import { Component, OnInit } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { HotelItemComponent } from '../../components/hotel-item/hotel-item.component';
import { Router } from '@angular/router';
import { HotelService } from '../../shared/services/hotel.service';
import { Hotel } from '../../shared/models/Hotel';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzTabsModule, NavbarComponent, NzListModule, NzGridModule, HotelItemComponent,CommonModule], // Ajoutez CommonModule ici
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(
    private router: Router,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe((data: Hotel[]) => {
      this.hotels = data;
    });
  }

  trackByHotelId(index: number, hotel: Hotel): number {
    return hotel.id ?? index;
  }
}

import { Component, OnInit } from '@angular/core';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { Input } from '@angular/core';
import { Hotel, Room } from '../../shared/models/Hotel';
import { RoomServiceService } from '../../shared/services/room-service.service';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../../shared/services/hotel.service';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';  
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [NavbarComponent,NzTypographyModule,NzFlexModule,NzRateModule,NzIconModule,NzButtonModule,NzTagModule,NzRateModule,NzGridModule,NzCardModule,NzSpaceModule,CommonModule,NzSpinModule,NzCarouselModule],
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.css'
})
export class HotelDetailsComponent implements OnInit {

  hotelId!: string;
  hotel: Hotel | null = null;
  rooms: Room[] = [];
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private roomService: RoomServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.hotelId = id;
        this.loadHotelDetails();
        this.loadRooms();
      } else {
        console.error('Hotel ID is missing from route parameters');
      }
    });
  }

  loadHotelDetails(): void {
    this.hotelService.getHotelById(this.hotelId).subscribe(
      data => {
        this.hotel = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching hotel details', error);
        this.isLoading = false;
      }
    );
  }

  loadRooms(): void {
    this.roomService.getRoomsByHotel(this.hotelId).subscribe(
      data => this.rooms = data,
      error => console.error('Error fetching rooms', error)
    );
  }
}

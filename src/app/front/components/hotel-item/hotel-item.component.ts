import { Component, Input, OnInit } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRateComponent } from 'ng-zorro-antd/rate';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { Router } from '@angular/router';
import { Hotel } from '../../shared/models/Hotel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-item',
  standalone: true,
  imports: [NzFlexModule, NzTypographyModule,NzRateModule,NzIconModule,NzButtonModule,NzRateComponent,NzTagModule,CommonModule],
  templateUrl: './hotel-item.component.html',
  styleUrl: './hotel-item.component.scss'
})
export class HotelItemComponent  {
  @Input() item !: Hotel;
  hotels: Hotel[] = [];
  constructor(
    private router : Router,
  ){}
  
  
  
 /* getHotels(): void {
    this.hotelService.getHotels().subscribe((data: Hotel[]) => {
      this.hotels = data;
      console.log(data);
    });
  }*/
  navigateToDetails() {
    this.router.navigate(['/booking/hotel-details', this.item.id]);
  }

}
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

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [NzTypographyModule,NzFlexModule,NzRateModule,NzIconModule,NzButtonModule,NzTagModule,NzRateModule,NzGridModule,NzCardModule,NzSpaceModule],
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.css'
})
export class HotelDetailsComponent implements OnInit {

  constructor(

  ){}
  ngOnInit(): void {
      
  }
}

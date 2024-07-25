import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRateComponent } from 'ng-zorro-antd/rate';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'app-hotel-item',
  standalone: true,
  imports: [NzFlexModule, NzTypographyModule,NzRateModule,NzIconModule,NzButtonModule,NzRateComponent,NzTagModule],
  templateUrl: './hotel-item.component.html',
  styleUrl: './hotel-item.component.scss'
})
export class HotelItemComponent {

}
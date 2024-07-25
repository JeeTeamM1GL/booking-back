import { Component } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NzInputModule,NzLayoutModule,NzIconModule,NzAvatarModule,NzFlexModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  value?: string;
}
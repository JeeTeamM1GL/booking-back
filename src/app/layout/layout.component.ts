import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { Component,Inject,OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NzBreadCrumbModule , NzAvatarModule, NzDropDownModule , NzButtonComponent, NzIconModule, NzTypographyModule, NzBackTopModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  currentSelectedMenuItemKey = "home";
  screenWidth =0;
  isDark = false;
  breabcrumbItems = [];
  pathName = "";
  constructor(
    private router : Router
  ){}
  ngOnInit(): void {
      const location = this.router.url;
      const splitLocation = location.split("/");
      const route = splitLocation[splitLocation.length-1];
      console.log(route);
  }

  navigate(route : string) {
    this.router.navigateByUrl(route);
  }

  changeTheme() {
    this.isDark = !this.isDark;
  }
}
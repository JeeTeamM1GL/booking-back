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
import { getBreadCrumbLabel } from '../utils/helpers';

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
  isDark = false;
  breabcrumbItems : any[] = [];
  pathName = "";
  screenWidth : number = window.innerWidth;
  
  constructor(
    private router : Router
  ){}
  ngOnInit(): void {

      this.router.events.subscribe({
        next : (value : any)=> {
          if (value && value !== undefined && value !== null) {
            const location = value?.url;
            if (location && location !== undefined && location !== null) {
              const splitLocation = location.split("/");
              const route = splitLocation[splitLocation.length-1];
              //console.log(route)

              let link = "";
              let breads : any[] = [];
              splitLocation.forEach((element:any , index : any)=> {
                if (element !== "") {
                    link+=`/${element}`;
                    if (index === splitLocation.length -1) {
                        breads.push({
                            title : getBreadCrumbLabel(element),
                            isLink : false,
                            link : link
                        })
                    }else{
                        breads.push({
                            title : getBreadCrumbLabel(element),
                            isLink : true,
                            link : link
                        })
                    }
                }

                this.breabcrumbItems = breads

                //console.log(this.breabcrumbItems)
            })
            }
          }
        }
      })
  }
  

  navigate(route : string) {
    this.router.navigateByUrl(route);
  }

  changeTheme() {
    this.isDark = !this.isDark;
  }
}
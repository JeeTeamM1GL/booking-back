import {Component, OnInit} from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzImageDirective} from "ng-zorro-antd/image";
import {NzInputDirective, NzInputGroupComponent, NzInputGroupWhitSuffixOrPrefixDirective} from "ng-zorro-antd/input";
import {NzSpaceComponent} from "ng-zorro-antd/space";
import {
    NzTableCellDirective,
    NzTableComponent,
    NzTbodyComponent,
    NzTheadComponent,
    NzThMeasureDirective, NzTrDirective
} from "ng-zorro-antd/table";
import {NzTransitionPatchDirective} from "ng-zorro-antd/core/transition-patch/transition-patch.directive";
import {NzTypographyComponent} from "ng-zorro-antd/typography";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {Hotel, Reservation} from "../../interfaces/interfaces";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalService} from "ng-zorro-antd/modal";
import {HotelsService} from "../../services/hotels/hotels.service";
import {formatDate} from "../../utils/helpers";
import {ReservationsService} from "../../services/reservations/reservations.service";

@Component({
  selector: 'app-bookings',
  standalone: true,
    imports: [NzCardModule, NzButtonComponent, NzFlexDirective, NzIconDirective, NzImageDirective, NzInputDirective, NzInputGroupComponent, NzInputGroupWhitSuffixOrPrefixDirective, NzSpaceComponent, NzTableCellDirective, NzTableComponent, NzTbodyComponent, NzThMeasureDirective, NzTheadComponent, NzTrDirective, NzTransitionPatchDirective, NzTypographyComponent, NzWaveDirective],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent implements OnInit{
  loading = false;
  dataSource : Reservation[] = [];
  constructor(
    private router : Router,
    private nzMessageService: NzMessageService,
    private modal : NzModalService,
    private reservationsService : ReservationsService
  ){}
  ngOnInit() {
    this.getReservationsList()
  }


  toString(word : string | any) {
    return word as string;
  }

  getReservationsList(){
    this.loading = true;
    this.reservationsService._getReservationsList()
      .subscribe({
        next : (data)=> {
          console.log(data)
          this.dataSource = data as Reservation[];
        },
        error : (err)=> {
          this.loading=false;
          this.nzMessageService.error("Quelque chose s'est mal passée");
        },
        complete : () => {
          this.loading = false
        },
      })
  }

  onRefresh(){
    this.ngOnInit()
  }

  onDetails(id : string | undefined) {
    this.router.navigateByUrl("/myspace/bookings/details-booking",{
      state : {id}
    });
  }

  _formatDate(record : any){
    return formatDate(record);
  }
}

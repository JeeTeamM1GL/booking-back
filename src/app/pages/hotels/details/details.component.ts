import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../../interfaces/interfaces";
import {HotelsService} from "../../../services/hotels/hotels.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzCardComponent} from "ng-zorro-antd/card";
import {Router} from "@angular/router";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzTransitionPatchDirective} from "ng-zorro-antd/core/transition-patch/transition-patch.directive";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    NzCardComponent,
    NzButtonComponent,
    NzTransitionPatchDirective,
    NzWaveDirective
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  constructor(
    private  hotelsService : HotelsService,
    private  msg : NzMessageService,
    private  router : Router
  ) {
  }
  hotelId : string | undefined ;
  loading = false;
  record: Hotel = {};
  ngOnInit() {
    const state : any = history.state;
    this.hotelId = state?.id;
    this.getHotelDetails(state?.id);
  }

  viewHotelRooms(){
    this.router.navigateByUrl("/myspace/hotels/details-hotel/rooms",{
      state : {
        hotelId : this.hotelId
      }
    });
  }

  getHotelDetails(id : string){
    this.loading = true;
    this.hotelsService._getHotelById(id)
      .subscribe({
        next : (data)=> {
          console.log(data)
          this.record = data;
        },
        error : (err)=> {
          this.loading=false;
          this.msg.error("Quelque chose s'est mal passée");
        },
        complete : () => {
          this.loading = false
        },
      })
  }


}

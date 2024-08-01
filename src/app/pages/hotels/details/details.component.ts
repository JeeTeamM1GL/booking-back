import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../../interfaces/interfaces";
import {HotelsService} from "../../../services/hotels/hotels.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzCardComponent} from "ng-zorro-antd/card";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    NzCardComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  constructor(
    private  hotelsService : HotelsService,
    private  msg : NzMessageService,
  ) {
  }
  //id : string | undefined ;
  loading = false;
  record: Hotel = {};
  ngOnInit() {
    const state : any = history.state;
    //this.id = state?.id;
    this.getHotelDetails(state?.id);
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

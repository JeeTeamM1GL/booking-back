import {Component, OnInit} from '@angular/core';
import {NzImageDirective} from "ng-zorro-antd/image";
import {HotelsService} from "../../../services/hotels/hotels.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";
import {RoomsService} from "../../../services/rooms/rooms.service";
import {Hotel, Room} from "../../../interfaces/interfaces";
import {NzListModule} from "ng-zorro-antd/list";
import {NzGridModule} from "ng-zorro-antd/grid";
@Component({
  selector: 'app-details',
  standalone: true,
    imports: [
      NzImageDirective,
      NzListModule,
      NzGridModule
    ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  constructor(
    private  roomsService : RoomsService,
    private  msg : NzMessageService,
    private  router : Router
  ) {
  }

  loading = false;
  record: Room = {};
  ngOnInit() {
    const state : any = history.state;
    this.getRoomDetails(state?.roomId);
  }

  toString(word : string | any) {
    return word as string;
  }

  getRoomDetails(id : string){
    this.loading = true;
    this.roomsService._getRoomById(id)
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

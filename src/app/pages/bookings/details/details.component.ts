import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd/message";
import {Reservation} from "../../../interfaces/interfaces";
import {ReservationsService} from "../../../services/reservations/reservations.service";
import {NzCardModule} from "ng-zorro-antd/card";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NzCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  constructor(
    private  reservationsService : ReservationsService,
    private  msg : NzMessageService,
  ) {
  }
  loading = false;
  record: Reservation = {};
  ngOnInit() {
    const state : any = history.state;
    //this.id = state?.id;
    this.getReservationDetails(state?.id);
  }

  getReservationDetails(id : string){
    this.loading = true;
    this.reservationsService._getReservationById(id)
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

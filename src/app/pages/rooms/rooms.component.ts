import {Component, OnInit} from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzCardComponent} from "ng-zorro-antd/card";
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
import {Hotel, Room} from "../../interfaces/interfaces";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalService} from "ng-zorro-antd/modal";
import {HotelsService} from "../../services/hotels/hotels.service";
import {formatDate} from "../../utils/helpers";
import {RoomsService} from "../../services/rooms/rooms.service";

@Component({
  selector: 'app-rooms',
  standalone: true,
    imports: [
        NzButtonComponent,
        NzCardComponent,
        NzFlexDirective,
        NzIconDirective,
        NzImageDirective,
        NzInputDirective,
        NzInputGroupComponent,
        NzInputGroupWhitSuffixOrPrefixDirective,
        NzSpaceComponent,
        NzTableCellDirective,
        NzTableComponent,
        NzTbodyComponent,
        NzThMeasureDirective,
        NzTheadComponent,
        NzTrDirective,
        NzTransitionPatchDirective,
        NzTypographyComponent,
        NzWaveDirective
    ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit{
  loading = false;
  hotelId = "";
  dataSource : Room[] = [];
  constructor(
    private router : Router,
    private nzMessageService: NzMessageService,
    private modal : NzModalService,
    private roomsService : RoomsService
  ){}

  ngOnInit(): void {
    const state : any = history.state;
    this.hotelId = state?.hotelId;
    this.getRoomsListByHotelId()
  }


  navigate(route : string) {
    this.router.navigateByUrl(route);
  }



  toString(word : string | any) {
    return word as string;
  }

  getRoomsListByHotelId(){
    this.loading = true;
    this.roomsService._getRoomsListByHotelId(this.hotelId)
      .subscribe({
        next : (data)=> {
          console.log(data)
          this.dataSource = data as Room[];
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
  onAdd() {
    this.router.navigateByUrl("/myspace/hotels/details-hotel/rooms/add-room",{
      state : {
        operation : "add",
        record : null
      }
    });
  }

  onEdit(record : Room) {
    //console.log(record)
    this.router.navigateByUrl("/myspace/hotels/details-hotel/rooms/add-room",{
      state : {
        operation : "update",
        record : record
      }
    });
  }

  onDelete(id : any) {

    this.modal.confirm({
      nzTitle: 'Voulez-vous supprimer cette ligne ?',
      nzOkText: 'Oui',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        console.log(id);
        this.roomsService._deleteRoom(id)
          .subscribe({
            next : (data)=> {
              this.nzMessageService.success("Ligne retirée succès");
              this.onRefresh();
            },
            error : (err)=> {
              this.nzMessageService.error("Quelque chose s'est mal passée");
            },
            complete : () => {
            },
          })

      },
      nzCancelText: 'Non',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  onDetails(id : string | undefined) {
    this.router.navigateByUrl("/myspace/hotels/details-hotel/rooms/details-room",{
      state : {id}
    });
  }

  // cancel(): void {
  //   this.nzMessageService.info('click cancel');
  // }

  // confirm(): void {
  //   this.nzMessageService.info('click confirm');
  // }

  _formatDate(record : any){
    return formatDate(record);
  }
}

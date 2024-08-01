import { Component, OnInit } from '@angular/core';
import { formatDate } from '../../utils/helpers';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzModalService , NzModalModule } from 'ng-zorro-antd/modal';
import { HotelsService } from '../../services/hotels/hotels.service';
import { Hotel } from '../../interfaces/interfaces';


@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [NzCardModule , NzTableModule , NzCheckboxModule, NzTypographyModule, NzPaginationModule , NzDividerModule, NzButtonModule , NzPopconfirmModule,NzFlexModule,NzInputModule, NzIconModule,NzSpaceModule , NzModalModule , NzImageModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent implements OnInit {

  loading = false;
  dataSource : Hotel[] = [];
  constructor(
    private router : Router,
    private nzMessageService: NzMessageService,
    private modal : NzModalService,
    private hotelsService : HotelsService
  ){}

  ngOnInit(): void {
    this.getHotelsList()
  }


  navigate(route : string) {
    this.router.navigateByUrl(route);
  }



  toString(word : string | any) {
      return word as string;
  }

  getHotelsList(){
    this.loading = true;
    this.hotelsService._getHotelsList()
    .subscribe({
      next : (data)=> {
        console.log(data)
        this.dataSource = data as Hotel[];
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
    this.router.navigateByUrl("/myspace/hotels/add-hotel",{
      state : {
        operation : "add",
        record : null
      }
    });
  }

  onEdit(record : Hotel) {
    //console.log(record)
    this.router.navigateByUrl("/myspace/hotels/add-hotel",{
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
        this.hotelsService._deleteHotel(id)
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
    this.router.navigateByUrl("/myspace/hotels/details-hotel",{
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

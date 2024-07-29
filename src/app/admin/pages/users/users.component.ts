import { Component, OnInit } from '@angular/core';
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
import { NzModalService , NzModalModule } from 'ng-zorro-antd/modal';



import { Router } from '@angular/router';
import { User } from '../../../interfaces/interfaces';
import { formatDate } from '../../../utils/helpers';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NzCardModule , NzTableModule , NzCheckboxModule, NzTypographyModule, NzPaginationModule , NzDividerModule, NzButtonModule , NzPopconfirmModule,NzFlexModule,NzInputModule, NzIconModule,NzSpaceModule , NzModalModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  constructor(
    private router : Router,
    private nzMessageService: NzMessageService,
    private modal : NzModalService
  ){}

  dataSource: User[] = [
    {
      id : "1",
      firstName: 'John',
      lastName : 'Brown',
      email: 'john@gmail.com',
      createdAt : new Date()
    },
    {
      id : "2",
      firstName: 'Toto',
      lastName : 'NDIAYE',
      email: 'toto@gmail.com',
      createdAt : new Date()
    },
  ];
  ngOnInit(): void {
    
  }

  navigate(route : string) {
    this.router.navigateByUrl(route);
  }

  onAdd() {
    this.router.navigateByUrl("/myspace/users/add-user",{
      state : {
        operation : "add",
        record : null
      }
    });
  }

  onEdit(record : User) {
    //console.log(record)
    this.router.navigateByUrl("/myspace/users/add-user",{
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
        this.nzMessageService.success("Cliqué avec succès")
      },
      nzCancelText: 'Non',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  onDetails(record : User) {
    this.router.navigateByUrl("/myspace/users/add-user",{
      state : record
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
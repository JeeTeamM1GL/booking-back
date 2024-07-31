import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../interfaces/interfaces';
import { AbstractControl, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzUploadChangeParam, NzUploadModule } from 'ng-zorro-antd/upload';
import sn from "./../../../constants/sn.json"
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [NzCardModule, NzSpaceModule , NzPageHeaderModule , NzButtonModule , NzFormModule, ReactiveFormsModule , NzInputModule, NzSelectModule, NzGridModule , NzUploadModule],
  templateUrl: './add-hotel.component.html',
  styleUrl: './add-hotel.component.css'
})
export class AddHotelComponent implements OnInit {
  validateForm: FormGroup<{
    name: FormControl<string>;
    address: FormControl<string>;
    country: FormControl<string>;
    city: FormControl<string>;
    description: FormControl<string>;
    gps_coordinate: FormControl<string>;
    rooms_count: FormControl<string>;
  }>;

  record : Hotel= {} ;
  operation : string = "";
  cities : any[] = sn;


  constructor(
    private fb: NonNullableFormBuilder,
    private router : Router,
    private msg : NzMessageService
  ) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      description: [''],
      gps_coordinate: ['', [Validators.required]],
      rooms_count: ['', [Validators.required]],
    });
  }

 


  ngOnInit(): void {
    const state : any = history.state;
    this.operation = state?.operation;
    this.record = state?.record as Hotel;
    this.validateForm.patchValue({
      name : this.record?.name,
      address : this.record?.location?.address,
      country : this.record?.location?.country,
      city : this.record?.location?.city,
      description : this.record?.description,
      gps_coordinate : this.record?.gps_coordinate,  
      rooms_count : this.record?.rooms_count?.toString()
    });
    
    //console.log(state);

    console.log(this.cities)
  }


 

  onBack(): void {
    console.log('onBack');
  }

  handleFile(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}

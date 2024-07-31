import { Component, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/interfaces';


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [NzCardModule, NzSpaceModule , NzPageHeaderModule , NzButtonModule , NzFormModule, ReactiveFormsModule , NzInputModule, NzSelectModule, NzGridModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit {

  validateForm: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    //checkPassword: FormControl<string>;
    indicatif: FormControl<string>;
    phoneNumber: FormControl<string>;
  }>;

  record : User= {} ;
  operation : string = "";

  constructor(
    private fb: NonNullableFormBuilder,
    private router : Router
  ) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      //checkPassword: ['', [Validators.required, this.confirmationValidator]],
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      indicatif: ['' , Validators.required],
      phoneNumber: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // const navigation = this.router.getCurrentNavigation();
    // const state = navigation?.extras?.state;
    const state : any = history.state;
    this.operation = state?.operation;
    this.record = state?.record as User;
    this.validateForm.patchValue({
      lastName : this.record?.lastName,
      firstName : this.record?.firstName,
      email : this.record?.email,
      indicatif : this.record?.telephone?.indicatif,  
      phoneNumber : this.record?.telephone?.number
    });
    
    //console.log(state);
  }

  onBack(): void {
    console.log('onBack');
  }

  confirmationValidator: ValidatorFn = (control: AbstractControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

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

  // updateConfirmValidator(): void {
  //   /** wait for refresh value */
  //   Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  // }

  
}
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  forgotpasswordform: FormGroup;
  submitted: boolean = false;
  formGroup: any;
  isformvalid: boolean;
  route: any;
  formSubmitted = false;

  displayDialog: boolean = false; // <-- add this line
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ,
    private router:Router

  ) {}

  forgotpassword() {
    this.forgotpasswordform = this.fb.group(
      {
        newpassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
            ),
          ],
        ],
        confirmnewpassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
            ),
          ],
        ],
      },
      {
        Validator: this.passwordMatchValidator,
      }
    );
  }
  passwordMatchValidator(control: AbstractControl) {
    const newpassword = control.get('newpassword');
    const confirmnewpassword = control.get('confirmnewpassword');
    if (newpassword.value != confirmnewpassword.value) {
      confirmnewpassword.setErrors({ passwordMatch: true });
    } else {
      confirmnewpassword.setErrors(null);
    }
  }

  submitforgotpassword() {
    this.submitted = true;
    console.log('forgotpasswordform', this.forgotpasswordform);
    if (this.forgotpasswordform.valid) {
      this.isformvalid = false;
      this.formSubmitted = true;
      this.displayDialog = true;
      // this.router.navigateByUrl('/siginin');
      // //this.toasterService.success('New password updated', 'success!');
      sessionStorage.setItem('token', 'hari');
      localStorage.setItem('token', 'pallavi');
    } else {
      this.isformvalid = true;
      // alert('please fill manditory fields');
      //this.toasterService.error('Please enter Newpassword', 'Error!');
    }
  }
  onDialogOK() {
    //this.toasterService.success('New password updated', 'success!');
    this.router.navigate(['/login']);

  }
  get f() {
    return this.forgotpasswordform.controls;
  }
  ngOnInit(): void {
    this.forgotpassword();
  }
}

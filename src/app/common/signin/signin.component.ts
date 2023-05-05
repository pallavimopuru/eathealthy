import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  sigininform: FormGroup;
  submitted: boolean = false;
  formGroup: any;
  isformvalid: boolean;
  displayToastError: any;
  username: string;
  // register: any [] = [];
  register = [];
  toasterservice: any;
  constructor(
    private router: Router,
    fb: FormBuilder,
private toastrService:ToastrService
  ) {
    this.username = sessionStorage.getItem('username')!;

    // password
    /**
     * (?=.*\d)         should contain at least 1 digit
     * (?=(.*\W){2})    should contain at least 2 special characters
     * (?=.*[a-zA-Z])   should contain at least 1 alphabetic character
     * (?!.*\s)         should not contain any blank space
     */

    //  this.register = JSON.parse(sessionStorage.getItem("register")!)!;

    this.sigininform = fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phonenumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^(\\+?d{1,4}[s-])?(?!0+s+,?$)\\d{10}s*,?$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,

           Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
          ),
        ],
      ],
      // confirmPassword: [
      //   '',
      //   Validators.required,
      //   Validators.pattern(
      //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
      //   ),
      // ],
    });
  }
  get f() {
    return this.sigininform.controls;
  }

  Onsubmitsignin() {
    this.submitted = true;
    console.log('loginform', this.sigininform);
    if (this.sigininform.valid) {
      const obj = this.sigininform.value;
      this.register.push(obj);
      sessionStorage.setItem('register', JSON.stringify(this.register));
      sessionStorage.setItem('token', 'pallu');
      this.isformvalid = false;
      //this.toasterService.success('register', ' Success!');
      this.router.navigateByUrl('/table');
    } else {
      this.isformvalid = true;
      alert('please enter fileds');
      this.toastrService.error('Please Enter all fileds','Error!')
    }
  }

  ngOnInit(): void {}
}

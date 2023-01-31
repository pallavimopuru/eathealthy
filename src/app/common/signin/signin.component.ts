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

  constructor(private router: Router, fb: FormBuilder,private toastr: ToastrService) {
    // password
    /**
     * (?=.*\d)         should contain at least 1 digit
     * (?=(.*\W){2})    should contain at least 2 special characters
     * (?=.*[a-zA-Z])   should contain at least 1 alphabetic character
     * (?!.*\s)         should not contain any blank space
     */

    this.sigininform = fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
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
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
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
  callingFunction() {
    this.submitted=true;
    console.log('loginform',this.sigininform);
    if(this.sigininform.valid){
      this.isformvalid=false;
      this.router.navigateByUrl('/login');
    }
    else{
      this.isformvalid = true;
       alert('please enter fileds');
    }
  }

  ngOnInit(): void {}
}



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginform: FormGroup;
  submitted: boolean = false;
  formGroup: any;
  isformvalid: boolean;

  constructor(private router: Router, fb: FormBuilder) {

    // password
     /**
     * (?=.*\d)         should contain at least 1 digit
     * (?=(.*\W){2})    should contain at least 2 special characters
     * (?=.*[a-zA-Z])   should contain at least 1 alphabetic character
     * (?!.*\s)         should not contain any blank space
     */

    this.loginform = fb.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      // lastName: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(3),
      //     Validators.maxLength(30),
      //   ],
      // ],
      // phonenumber: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.pattern('^(\\+?d{1,4}[s-])?(?!0+s+,?$)\\d{10}s*,?$'),
      //   ],
      // ],
      // email: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(3),
      //     Validators.maxLength(10),
      //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      //   ],
      // ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/),
        ],
      ],

    });

  }

  get f() {
    return this.loginform.controls;
  }

  loginfunction() {
    this.submitted=true;
    console.log('loginform',this.loginform);
    if(this.loginform.valid){
      this.isformvalid=false;
      this.router.navigateByUrl('/contact');
    }
    else{
      this.isformvalid = true;
      alert('please fill manditory fields');

    }
  }

  ngOnInit(): void {

  }

}

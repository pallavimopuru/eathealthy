import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss'],
})
export class NormalComponent implements OnInit {
  submitted: boolean = false;
  show:boolean = false;
  value: any;
  calender: Date;
  isformvalid: boolean;
  selectedvalue: any;
  normalform: FormGroup;
  selectedDate: NgbDateStruct;
  selectedOption: string;
  showInput: boolean = false;
  inputValue: string;
  isVisiblea = false;
  isVisibleb = false;
  isVisiblec = false;

  // get f() {
  //   return this.normalform.controls;
  // }
  constructor(
    private fb: FormBuilder,
  ,
    private router: Router
  ) {}

  // get f() {
  //   return this.normalform.controls;
  // }
  City: any = ['Software Developer', 'Android DEveloper', 'IOS Developer', 'QA','Other'];

  normalformdata() {
    this.normalform = this.fb.group({
      name: ['', [Validators.required,Validators.pattern(/^[^\s][a-zA-Z ]*[a-zA-Z]$/)]],
      phonenumber:['',[Validators.required, Validators.pattern(/^[6-9]\d{2}[2-9]\d{2}\d{4}$/)]],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        ],
      ],
      // password: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.pattern(
      //       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
      //     ),
      //   ],/^[6-9]\d{2}[2-9]\d{2}\d{4}$/
      // ],
      age: [
        '',
        [
          Validators.required,
          Validators.pattern(/^([1-9]|[2-9]\d|1[01]\d|120)$/),
        ],
      ],
      textera: ['', [Validators.required]],
      dropdown: ['',[Validators.required]],
      calender: ['', [Validators.required]],
      addadress: ['', [Validators.required]],
      adress: ['', [Validators.required]],

      Role:['',[Validators.required]]
    });
  }
  togglea() {
    this.isVisiblea = !this.isVisiblea;
  }
  toggleb() {
    this.isVisibleb = !this.isVisibleb;
  }
  togglec() {
    this.isVisiblec = !this.isVisiblec;
  }
  toggle() {
    this.show = !this.show;
  }
  changecity(e) {
    console.log(e.target.value);
    this.selectedvalue = e.target.value;
  }
  submitform() {
    this.submitted = true;
    console.log('normalform', this.normalform.value);
    if (this.normalform.valid) {
      // If the form is valid
      this.isformvalid = false;
      var value = JSON.stringify(this.normalform.value);
      sessionStorage.setItem('formdata', value);
      localStorage.setItem('formdata', value);
      //this.toasterService.success('Message service!', 'Title Success!');
      this.router.navigateByUrl('/dashboard');
    } else {
      // If the form is not valid
      this.isformvalid = true;
      //this.toasterService.error('Please Enter All Fields!', 'Title Error!');
    }
  }

  get() {
    return sessionStorage.getItem('formdata');
  }

  ngOnInit() {
    this.normalformdata();
    console.log('f', this.normalform);
  }
}

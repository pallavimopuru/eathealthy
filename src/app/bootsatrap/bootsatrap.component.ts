import { Component, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bootsatrap',
  templateUrl: './bootsatrap.component.html',
  styleUrls: ['./bootsatrap.component.scss'],
})
export class BootsatrapComponent {
  booststrapform: FormGroup;
  submitted: boolean = false;
  formGroup: any;
  isformvalid: boolean =false;

  fileInput: any;
  admin: any;
  MessagesService: any;

  sessionStorage: any;

  constructor(private toastrService: ToastrService, private fb: FormBuilder,private router: Router) {
    this.booststrapform = this.fb.group({
      email: [
        '',
        [Validators.required,Validators.minLength(5),
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),]
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
    });
  }
//email patterns?

  showSuccess() {
    this.toastrService.success('Message Success!', 'Title Success!');
  }

  showInfo() {
    this.toastrService.info('Message Info!', 'Title Info!');
  }

  showWarning() {
    this.toastrService.warning('Message Warning!', 'Title Warning!');
  }

  showError() {
    this.toastrService.error('Message Error!', 'Title Error!');
  }
  get form() {
    return this.booststrapform.controls;
  }


  submitboostrap() {
    this.submitted = true;
    console.log('booststrapform', this.booststrapform.value);
    if (this.booststrapform.valid) {
      // Store the data in session storage
      var value = JSON.stringify(this.booststrapform.value);
      sessionStorage.setItem('formData', value);

      // Store the data in local storage
      localStorage.setItem('formData', JSON.stringify(this.booststrapform.value));

      this.toastrService.success('Message Success!', 'Title Success!');
      this.router.navigateByUrl('/contact');
    } else {
      this.toastrService.error('Message Error!', 'Title Error!');
    }
  }
  get(){
    return sessionStorage.getItem('formData');
  }
  ngOnInIt() {

  }
}

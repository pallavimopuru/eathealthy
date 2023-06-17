import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../shared/auth.service';




import * as html2pdf from 'html2pdf.js';
import { ToastrService } from 'ngx-toastr';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  submitted: boolean = false;
  formGroup: any;
  isformvalid: boolean;
  register = [];
  captcharesponse: string;

  constructor(
    private router: Router,
    fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {
    this.loginform = fb.group({
      userName: ['', [Validators.required]],

      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
          ),
        ],
      ],
    //captcharesponse:['', [Validators.required]]
    });
  }

  // downloadloginpage(){
  //   html2canvas(document.body).then(canvas=>{
  //     const link=document.createElement('a');
  //     link.download='page.pdf';
  //     link.href=canvas.toDataURL();
  //     link.click();
  //   });
  // }

  // downloadloginpdf() {
  //   const options = {
  //     filename: 'page.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'in', format: 'letter', orientation: 'potrait' }
  //   };
  //   html2pdf().set(options).from(document.body).save();
  // }


  // downloadloginpdf() {
  //   const options = {
  //     filename: 'page.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  //   };
  //   html2pdf().set(options).from(document.body).save();
  // }

  downloadPageAsPDF() {
    const element = document.getElementById('pageContent');

    if (element) {
      const width = element.offsetWidth;
      const height = element.offsetHeight;

      // Create a new jsPDF instance with the specified width and height
      const doc = new jsPDF({
        orientation: 'l', // Set the orientation to landscape if needed
        unit: 'px',
        format: [width, height]
      });

      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 0, 0, width, height);

        doc.save('page.pdf');
      });
    } else {
      console.error("Element 'pageContent' not found in the DOM.");
    }
  }




  get f() {
    return this.loginform.controls;
  }
  //  getusername(){
  //  return sessionStorage.getItem('username');
  //  }
  loginfunction() {
    this.submitted = true;
    console.log('loginform', this.loginform);
    if (this.loginform.valid) {
      this.isformvalid = false;
      const obj = this.loginform.value;

      this.register.push(obj);
      sessionStorage.setItem('register', JSON.stringify(this.register));
      sessionStorage.setItem('username', this.loginform.value.userName);
      sessionStorage.setItem('token', 'hari');
      this.toastrService.success('Login', ' Success!');
      this.router.navigateByUrl('/signin');
    } else {
      this.isformvalid = true;
      alert('please fill mandatory fields');
      this.toastrService.error('please fill all Login fields ', 'Error!');
    }
  }
  // oncpatcharesolved(captcharesponse: string) {
  //   this.captcharesponse = captcharesponse;
  //   this.onCaptchaResolved(captcharesponse);
  //   if (captcharesponse) {
  //   } else {
  //   }
  // }

  ngOnInit(): void {}
  login(username: string, password: string) {
    return this.http
      .post<any>('/api/authenticate', {
        username: username,
        password: password,
      })
      .pipe(
        map((response) => {
          // login successful if there's a jwt token in the response
          if (response && response.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(response));
          }
          return response;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
  getToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser ? currentUser.token : '';
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
 show:boolean = false;
 buttonName:any = 'Show';
  isformvalid: boolean;
  aboutform: FormGroup;
  submitted: boolean = false;
  formGroup: any;
  fileInput: any;

  fb: any;
  router: any;

constructor( fb: FormBuilder){}

  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }




    // password
     /**
     * (?=.*\d)         should contain at least 1 digit
     * (?=(.*\W){2})    should contain at least 2 special characters
     * (?=.*[a-zA-Z])   should contain at least 1 alphabetic character
     * (?!.*\s)         should not contain any blank space
     */
     aboutinfoform(){
    this.aboutform = this.fb.group({
      yourname: [
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
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      // password: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/),
      //   ],
      // ],

    });

  }
  aboutsubmit() {
    this.submitted = true;
    console.log('aboutform', this.aboutform);
    if (this.aboutform.valid) {
      this.isformvalid = false;
      this.router.navigateByUrl('/contact');
    } else {
      this.isformvalid = true;
      alert('please fill manditory fields');
    }
  }

ngOnInit(): void {
  this.aboutsubmit();
  this.aboutinfoform();
}



}

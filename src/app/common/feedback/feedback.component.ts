import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  file: any;
  rating = 0;
  today: number = Date.now();
  submitted: boolean = false;
  router: any;
  isformvalid: boolean;
  feedbackform: any;
  textBoxDisabled = true;
  fileInput: any;
  admin: any;
  MessagesService: any;
  loading: boolean;
  uploadedFiles: any[] = [];
  name: string = '';
  local: any;
  ssn: any;
  useractivated: false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _employeservice: EmployeService
  ) {}
  feedbackinfoform() {
    this.feedbackform = this.fb.group({
      msg: ['', [Validators.required]],
      category: ['', Validators.required],

      name: ['', Validators.required],
      adress: ['', [Validators.required]],
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
      addadress: ['', [Validators.required]],
      upload: ['', [Validators.required]],

      rating: ['', [Validators.required]],
    });
  }
  get f() {
    return this.feedbackform.controls;
  }
  feedbacksubmit() {
    this.submitted = true;
    console.log('feedbackform', this.feedbackform);
    if (this.feedbackform.valid) {
      this.isformvalid = false;
      this.router.navigateByUrl('/contact');

    } else {
      this.isformvalid = true;
      alert('please fill manditory fields');
    }

    sessionStorage.setItem('name', 'spallu');
    sessionStorage.setItem('name1', 'spallu1');

    localStorage.setItem('localname', 'lpallu');
    localStorage.setItem('localname1', 'lpallu1');
  }
  get() {
    return sessionStorage.getItem('name');
  }
  removeitem() {
    sessionStorage.removeItem('key');
  }
  clearAll() {
    sessionStorage.clear();
    localStorage.clear();
  }
  retrive() {
    this.ssn = sessionStorage.getItem('name');
    this.local = localStorage.getItem('localname');
  }
  //   onBasicUploadAuto(event){
  //     for(let file of event.files) {
  //       this.uploadedFiles.push(file);
  //   }
  // console.log('uploadedFiles',this.uploadedFiles);

  // }
  getName(name: string) {
    this.name = name;
    console.log('name', this.name);
  }
  getFile(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file);
  }
  submitfile() {
    //   let formdate=new FormData;
    //   FormData.set('name',this.name);
    //  FormData.set('file',this.file);
    //   this.http.post('http://localhost:3001/upload/uploadFiles',FormData).subscribe(
    //     (response)=>{
    //     }
    //   )
  }
  save() {}
  ngOnInit() {
    this.feedbackinfoform();
  }
}

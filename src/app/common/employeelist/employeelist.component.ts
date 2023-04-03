import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { interval } from 'rxjs';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss'],
})
export class EmployeelistComponent implements OnInit {
  employees: any[] = [];
  groups: any[] = [];
  employee: any;
  api: any;
  options = [];
  selectedvalue: any;
  selectedEmployees: string[] = [];
  dropdownList: any;
  empapi: any;
  displayBasic: boolean;
  title = 'sessionstorage';
  savearray: any = [];
  stringifiedData: string;
  myObjStr: string;
  val2: number = 50;

  constructor(private _employeservice: EmployeService, ) {} //we are giving employee service here
  changeemp(e) {
    console.log(e.target.value);
    this.selectedvalue = e.target.value;
  }
  showBasicDialog() {
    this.displayBasic = true;
  }
  save() {
    // sessionStorage.setItem('name','value');
    console.log(this.savearray);
    let obj =[
      {
        'test':123,
        'test1':1234
      },
      {
        'test':213,
        'test1':2134
      }
    ]

    let obj1 =['123','234']


    sessionStorage.setItem('name', JSON.stringify(obj1));
    localStorage.setItem('name', JSON.stringify(this.savearray));
  }

  get() {
    return sessionStorage.getItem(this.savearray);
  }
  remove() {
    sessionStorage.removeItem('name');
  }
  clear() {
    sessionStorage.clear();
  }
  // onActivate(){
  //   this._employeservice.activatedEmitter.emit(value:true);
  // }
  ngOnInit() {
    this.employees = this._employeservice.getEmployees(); //we are calling whole employeedata and assiging it into employees
    this.groups = this._employeservice.groups();
    this._employeservice.getEmployee().subscribe((data) => {
      this.employee = data;
    });

    this._employeservice.getapi().subscribe((data: any) => {
      this.api = data;
      let tmp = [];
      if (data) {
        for (let i = 0; i < data.length; i++) {
          tmp.push({ item_id: i, item_text: data[i].name });
        }
        this.dropdownList = tmp;
        console.log('subscribe', data);
      }
    });

    this._employeservice.getapitoPromise().then((response) => {
      this.empapi = response;
      console.log('Step 2 completed ', response);
      // Without Promise and with Delayed message
    });


  }
}



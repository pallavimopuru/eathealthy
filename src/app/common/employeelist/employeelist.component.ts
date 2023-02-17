import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss'],
})
export class EmployeelistComponent implements OnInit {
  public employees: any[] = [];
  public groups: any[] = [];
  public employee: any;
  api: any;
  options = [];
  selectedvalue: any;
  selectedEmployees: string[] = [];
  settings: { enableSearch: boolean; selectionLimit: number; displayAllSelectedText: boolean; };
  dropdownList: any;
  empapi: any;
  displayBasic: boolean;

  constructor(private _employeservice: EmployeService) {} //we are giving employee service here
  changeemp(e){
    console.log(e.target.value);
this.selectedvalue=e.target.value;
  }
  showBasicDialog() {
    this.displayBasic = true;
}
  ngOnInit(): void {
    this.employees = this._employeservice.getEmployees(); //we are calling whole employeedata and assiging it into employees
    this.groups = this._employeservice.groups();
    this._employeservice.getEmployee().subscribe((data) => {
      this.employee = data;
    });

    this._employeservice.getapi().subscribe((data:any) => {
      this.api = data;
      let tmp = [];
      if(data){
        for(let i=0; i < data.length; i++) {
          tmp.push({ item_id: i, item_text: data[i].name });

        }
        this.dropdownList = tmp;
        console.log("subscribe",data);
      }
    });

    this._employeservice.getapitoPromise().then((response) => {
      this.empapi = response;
      console.log("Step 2 completed ", response);
    // Without Promise and with Delayed message
    });

  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/common/employe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show: boolean = false;
  buttonName: any = 'Cart';
  public groups: any[] = [];
  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if (this.show)
     this.buttonName = 'Hide cart';
    else
    this.buttonName = 'Show cart';
  }
  constructor( private _employeservice: EmployeService){}
  ngOnInit() {
    this.groups = this._employeservice.groups();
    console.log('groups',this.groups);

  }
}

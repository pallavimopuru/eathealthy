import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/common/employe.service';
import { AuthService } from 'src/app/common/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showmenu:boolean=false;
  show: boolean = false;
  buttonName: any = 'Cart';
  public groups: any[] = [];
  navigateByurl: any;
  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if (this.show)
     this.buttonName = 'Hide cart';
    else
    this.buttonName = 'Show cart';
  }
  constructor( private _employeservice: EmployeService,private authService: AuthService){}
  ngOnInit() {
    this.groups = this._employeservice.groups();
    console.log('groups',this.groups);

  }
  logout(){
    sessionStorage.removeItem('token');
    this.navigateByurl('/login');
  }

  togglemenu(){
    this.showmenu=!this.showmenu;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  // buttonName: any = 'Cart';
  public groups: any[] = [];
  navigateByurl: any;
  username: string;
  type: string;

  constructor( private _employeservice: EmployeService,private authService: AuthService,public router :Router){
   this.username =  sessionStorage.getItem('username')!;
   console.log('router',this.router);
  }

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

import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  constructor() {}
  session(){
    sessionStorage.setItem('name', 'spallu');
    localStorage.setItem('localname', 'lpallu');
  }
  get(){
    return  sessionStorage.getItem('name');

  }
  getl(){
    return localStorage.getItem('localname');
  }
  ngOnInit(): void {

  }
}

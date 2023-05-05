import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  makeHttpRequest() {
    throw new Error('Method not implemented.');
  }


  private username: string; // declare a property

  constructor() { }// assign authService to authService property


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iemployee } from './emploee';

@Injectable({
  //if injectable is there we can inject one service into another services ,if we remove injectable it works as a normal typescript
  providedIn: 'root',
})
export class EmployeService {
  private _url: string = '/assets/data/employees.json';
  private url: string = 'https://localhost:7142/api/Listemp';
  dropdownList: any[];
  constructor(private http: HttpClient) {} //Dependency injection register in we are adding http client

  getEmployees() {
    //service has a method which return the employees
    return [
      { id: 1, name: 'andrew', age: 30 },
      { id: 2, name: 'genny', age: 22 },
      { id: 2, name: 'sona', age: 25 },
      { id: 4, name: 'maxy', age: 25 },
    ];
  }
  groups() {
    return [
      { id: 1, name: 'andrew', age: 30 },
      { id: 2, name: 'pallu', age: 20 },
      { id: 3, name: 'gem', age: 70 },
      { id: 3, name: 'rexa', age: 70 },
    ];
  }
  getEmployee() {
    return this.http.get(this._url);
  }
  getownapi() {
    return this.http.get(this.url);
  }
  getapi(){
    return this.http.get(`https://gorest.co.in/public/v2/users`)
  }
  getData() {

    return this.http.get('https://gorest.co.in/public/v2/users');
  }
  getapitoPromise() {
    return  this.http.get(`https://localhost:7142/api/Listemp`).toPromise();

  }

}

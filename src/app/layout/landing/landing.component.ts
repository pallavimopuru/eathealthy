import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
public requiredFieldError:boolean=false;
public parameterError:boolean=false;

constructor(private router: Router) {
  if (this.router.url.indexOf('/lk;') !== -1) {
    this.router.navigateByUrl('/error');
  }
}

}

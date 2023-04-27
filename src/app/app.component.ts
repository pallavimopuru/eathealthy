import { Component } from '@angular/core';
import { AuthService } from './common/shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular';
  username: any;
  constructor( private authService: AuthService){

  }

}

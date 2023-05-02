import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import { LoadingService } from './loading.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AuthService } from './common/shared/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular';

  color: any;
  loading$: Observable<boolean>;

  constructor(
    private loadingservice: LoadingService,
    private spinner: NgxSpinnerService,
    private authservice: AuthService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.loading$ = this.loadingservice.loading$;
    this.loading$.subscribe((res: any) => {
      if (res === true) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
    // Example usage:
    // Call showspinner() before making an HTTP request
    // and hidespinner() when the request is complete
    // this.loadingservice.showspinner();
    // this.authservice.makeHttpRequest().subscribe(
    //   response => {
    //     // handle the response
    //     this.loadingservice.hidespinner();
    //   },
    //   error => {
    //     // handle the error
    //     this.loadingservice.hidespinner();
    //   }
    // );
  }
}


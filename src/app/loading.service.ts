import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  toast$: any;

  loadingsubject: any;

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private spinner: NgxSpinnerService) {}

  showspinner() {
    this.loadingsubject.next(true);
    this.spinner.show();
  }
  hidespinner() {
    this.loadingsubject.next(false);
    this.spinner.hide();
  }
  subscribespinner() {
    return this.loading$;
  }
  ngOnInit() {}
}

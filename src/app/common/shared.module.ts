import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { OffersComponent } from './offers/offers.component';
import { HelppComponent } from './helpp/helpp.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutusComponent } from './aboutus/aboutus.component';
@NgModule({
    declarations: [


    SearchComponent,
         OffersComponent,
         HelppComponent,
         CartComponent,
         LoginComponent,
         FeedbackComponent,
         AboutusComponent
  ],
    imports: [
      NgModule
    ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { CaluclatorComponent } from './common/caluclator/caluclator.component';
import { CartComponent } from './common/cart/cart.component';

import { ContactComponent } from './common/contact/contact.component';
import { EmployeelistComponent } from './common/employeelist/employeelist.component';
import { FeedbackComponent } from './common/feedback/feedback.component';
import { HelppComponent } from './common/helpp/helpp.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { OffersComponent } from './common/offers/offers.component';
import { SearchComponent } from './common/search/search.component';
import { SigninComponent } from './common/signin/signin.component';



const routes: Routes = [

{path:'',component:SigninComponent},
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'helpp', component: HelppComponent },
  { path: 'cart', component: CartComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'calculator', component: CaluclatorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

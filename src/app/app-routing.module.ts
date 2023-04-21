import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootsatrapComponent } from './bootsatrap/bootsatrap.component';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { NormalComponent } from './normal/normal.component';
import { TableComponent } from './table/table.component';
import { TablechangesComponent } from './tablechanges/tablechanges.component';
import { ChartComponent } from './chart/chart.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent, canActivate: [AuthGuard] },
  { path: 'helpp', component: HelppComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'offers', component: OffersComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'aboutus', component: AboutusComponent, canActivate: [AuthGuard] },
  { path: 'employeelist', component: EmployeelistComponent, canActivate: [AuthGuard] },
  { path: 'Caluclator', component: CaluclatorComponent, canActivate: [AuthGuard] },
  { path: 'bootsatrap', component: BootsatrapComponent, canActivate: [AuthGuard] },
  { path: 'normal', component: NormalComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'tablechanges', component: TablechangesComponent, canActivate: [AuthGuard] },
  { path: 'chart', component: ChartComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

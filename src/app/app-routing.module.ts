import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaluclatorComponent } from './common/caluclator/caluclator.component';
import { ContactComponent } from './common/contact/contact.component';
import { EmployeelistComponent } from './common/employeelist/employeelist.component';
import { FeedbackComponent } from './common/feedback/feedback.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { SearchComponent } from './common/search/search.component';
import { SigninComponent } from './common/signin/signin.component';
import { TableComponent } from './table/table.component';
import { TablechangesComponent } from './tablechanges/tablechanges.component';
import { ChartComponent } from './chart/chart.component';
import { AuthGuard } from './auth.guard';
import { ForgotpasswordComponent } from './common/forgotpassword/forgotpassword.component';
import { ToastrModule } from 'ngx-toastr';
import { LandingComponent } from './layout/landing/landing.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'landing',component:LandingComponent},
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'Caluclator', component: CaluclatorComponent },
  { path: 'table', component: TableComponent },
  { path: 'tablechanges', component: TablechangesComponent },
  { path: 'chart', component: ChartComponent },
  {path:'forgotpassword',component:ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ToastrModule.forRoot(),],
  exports: [RouterModule],
})
export class AppRoutingModule {}

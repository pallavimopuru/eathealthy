// import {
//   CUSTOM_ELEMENTS_SCHEMA,
//   forwardRef,
//   NgModule,
//   NO_ERROR_SCHEMA,
// } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add this import statement
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './common/home/home.component';
import { ContactComponent } from './common/contact/contact.component';
import { SigninComponent } from './common/signin/signin.component';
import { SearchComponent } from './common/search/search.component';
import { LoginComponent } from './common/login/login.component';
import { FeedbackComponent } from './common/feedback/feedback.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutusComponent } from './common/aboutus/aboutus.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

import { DropdownDirective } from './common/shared/dropdown.directive';
import { EmployeService } from './common/employe.service';
import { EmployeelistComponent } from './common/employeelist/employeelist.component';
import { CaluclatorComponent } from './common/caluclator/caluclator.component';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { TableModule } from 'primeng/table';
import { TablechangesComponent } from './tablechanges/tablechanges.component';
import { DropdownModule } from 'primeng/dropdown';
import { ChartComponent } from './chart/chart.component';
import { ChartModule } from 'primeng/chart';
import { ForgotpasswordComponent } from './common/forgotpassword/forgotpassword.component';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LoginComponent,
    FeedbackComponent,
    AboutusComponent,
    SidebarComponent,
    DropdownDirective,
    EmployeelistComponent,
    CaluclatorComponent,
    TableComponent,
    TablechangesComponent,
    ChartComponent,
    ForgotpasswordComponent,
  ],
  providers: [EmployeService], //we are injecting employee service in providers so whole application acn use service
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    DialogModule,
    MultiSelectModule,

    AppRoutingModule,
    FileUploadModule,
    CalendarModule,

    SliderModule,
    InputTextModule,

    TableModule,
    DropdownModule,
    ChartModule,
    NgxSpinnerModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    DatePipe,
    NgxPaginationModule,
    HttpClientModule,
    NgbModule,
    DashboardModule
  ],
})
export class AppModule {}

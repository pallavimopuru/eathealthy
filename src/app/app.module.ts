import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { HomeComponent } from './common/home/home.component';
import { ContactComponent } from './common/contact/contact.component';
import { SigninComponent } from './common/signin/signin.component';
import { CartComponent } from './common/cart/cart.component';
import { HelppComponent } from './common/helpp/helpp.component';
import { SearchComponent } from './common/search/search.component';
import { OffersComponent } from './common/offers/offers.component';
import { LoginComponent } from './common/login/login.component';
import { FeedbackComponent } from './common/feedback/feedback.component';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRating} from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BasicHighlightDirective } from './common/basic-hilight/basic-highlight.directive';
import { BetterHighlightDirective } from './common/basic-hilight/better-highlight.directive';
import { UnlessDirective } from './common/basic-hilight/unless.directive';
import { DropdownDirective } from './common/shared/dropdown.directive';
import { EmployeService } from './common/employe.service';
import { EmployeelistComponent } from './common/employeelist/employeelist.component';
import { CaluclatorComponent } from './common/caluclator/caluclator.component';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SigninComponent,
        ContactComponent,
        HeaderComponent,
        FooterComponent,
        CartComponent,
        HelppComponent,
        SearchComponent,
        OffersComponent,
        LoginComponent,
        FeedbackComponent,
        AboutusComponent,
        SidebarComponent,
        BasicHighlightDirective,
        BetterHighlightDirective,
        UnlessDirective,
        DropdownDirective,
        EmployeelistComponent,
        CaluclatorComponent,


    ],
    providers: [EmployeService],  //we are injecting employee service in providers so whole application acn use service
    bootstrap: [AppComponent],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ],
    imports: [
      DialogModule,
      MultiSelectModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        FileUploadModule,
        HttpClientModule,
        NgbModule,
        NgbRating,
        CalendarModule,
        HttpClientModule, //we r adding http and inject

    ]
})
export class AppModule {

 }

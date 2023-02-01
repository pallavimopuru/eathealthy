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
        SidebarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ],
    imports: [
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
        NgbRating
    ]
})
export class AppModule {

 }

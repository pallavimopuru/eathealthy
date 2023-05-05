import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { UploadImagesComponent } from './components/common/upload-images/upload-images.component';


@NgModule({
  declarations: [

    UploadImagesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

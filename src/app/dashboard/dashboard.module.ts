import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { UploadImagesComponent } from './components/common/upload-images/upload-images.component';


@NgModule({
  declarations: [
    DashboardContainerComponent,
    UploadImagesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

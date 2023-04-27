import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UploadimagesComponent } from './common/uploadimages/uploadimages.component';
import { DashboardConatinerComponent } from './dashboard-conatiner/dashboard-conatiner.component';



@NgModule({
  declarations: [
    UploadimagesComponent,
    DashboardConatinerComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

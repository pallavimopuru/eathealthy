import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadImagesComponent } from './components/common/upload-images/upload-images.component';
import { LoginComponent } from '../common/login/login.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component:DashboardContainerComponent,
  children: [
    { path: 'uploadimages', component: UploadImagesComponent },

  ]
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

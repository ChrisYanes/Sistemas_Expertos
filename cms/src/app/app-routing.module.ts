import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistroComponent } from 'src/app/registro/registro.component';
import { LandingComponent } from './landing/landing.component';
import { DashComponent } from './homeboard/dash/dash.component';
//import {  } from 'src/app/';
const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'dashboard', component: DashComponent
  },
  {
    path:'registro',
    component: RegistroComponent
  },
  
  {
    path:'login',
    component:LoginComponent
  },
  // {
  //   path:'**',
  //   component:NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


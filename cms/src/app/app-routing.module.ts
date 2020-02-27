import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistroComponent } from 'src/app/registro/registro.component';
//import {  } from 'src/app/';
const routes: Routes = [
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

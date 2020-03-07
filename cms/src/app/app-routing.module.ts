import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistroComponent } from 'src/app/registro/registro.component';
import { LandingComponent } from './landing/landing.component';

import { HomeboardComponent } from './homeboard/homeboard.component';
import { DashComponent } from './homeboard/dash/dash.component';
import { ConfigurationsComponent } from './homeboard/configurations/configurations.component';
import { DismissedAccountComponent } from './homeboard/dismissed-account/dismissed-account.component';
import { PrivacityComponent } from './homeboard/privacity/privacity.component';
import { CodePageComponent } from './homeboard/code-page/code-page.component';
import { PurchasesComponent } from './homeboard/purchases/purchases.component';
import { SecurityComponent } from './homeboard/security/security.component';

import { BillingHistoryComponent } from './homeboard/billing-history/billing-history.component';
import { NextChargesComponent } from './homeboard/next-charges/next-charges.component';
import { OtherWebsitesComponent } from './homeboard/other-websites/other-websites.component';
import { AddCreditCardComponent } from './homeboard/add-credit-card/add-credit-card.component';

//import {  } from 'src/app/';
const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'dashboard', component: DashComponent
  },
  {
    path: 'configurations', component: ConfigurationsComponent
  },
  {
    path: 'dismissed-acount', component: DismissedAccountComponent
  },
  {
    path: 'privacity', component: PrivacityComponent
  },
  {
    path: 'purchases', component: PurchasesComponent
  },
  {
    path: 'security', component: SecurityComponent
  },
  {
    path: 'code-page', component: CodePageComponent
  },
  {
    path: 'purchases/next-charges', component: NextChargesComponent
  },
  {
    path: 'purchases/billing-history', component: BillingHistoryComponent
  },
  {
    path: 'purchases/other-websites', component: OtherWebsitesComponent
  },

  {
    path: 'billing-history/add-credit-card', component: AddCreditCardComponent
  },

  {
    path:'registro',
    component: RegistroComponent
  },
  
  {
    path:'login',
    component:LoginComponent
  },
  // { path: 'home', component: HomeboardComponent, children:[ 
  //   { path: 'dashboard', component: DashComponent},
  // ]}
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



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LandingComponent } from './landing/landing.component';
import { HomeboardComponent } from './homeboard/homeboard.component';
import { DashComponent } from './homeboard/dash/dash.component';
import { ConfigurationsComponent } from './homeboard/configurations/configurations.component';
import { DismissedAccountComponent } from './homeboard/dismissed-account/dismissed-account.component';
import { PrivacityComponent } from './homeboard/privacity/privacity.component';
import { CodePageComponent } from './homeboard/code-page/code-page.component';
import { PurchasesComponent } from './homeboard/purchases/purchases.component';
import { SecurityComponent } from './homeboard/security/security.component';
import { HomeComponent } from './homeboard/code-page/home/home.component';
import { PagesComponent } from './homeboard/code-page/web-site/pages/pages.component';
import { BillingHistoryComponent } from './homeboard/billing-history/billing-history.component';
import { NextChargesComponent } from './homeboard/next-charges/next-charges.component';
import { OtherWebsitesComponent } from './homeboard/other-websites/other-websites.component';
import { AddCreditCardComponent } from './homeboard/add-credit-card/add-credit-card.component';
import { LogoutComponent } from './homeboard/logout/logout.component';

//import {  } from 'src/app/';
const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'homeboard', component: HomeboardComponent
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
    path: 'home', component: HomeComponent
  },
  {
    path: 'pages', component: PagesComponent
  },
  {
    path:'registro', component: RegistroComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'billing-history', component:BillingHistoryComponent
  },
  {
    path:'next-charges', component:NextChargesComponent
  },
  {
    path:'other-websites', component:OtherWebsitesComponent
  },
  {
    path:'add-credit-card', component:AddCreditCardComponent
  },
  {
    path:'logout', component:LogoutComponent
  }
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


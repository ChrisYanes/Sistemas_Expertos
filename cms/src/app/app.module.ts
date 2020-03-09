import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//para notificaciones con sweet alert 2
//import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { HomeboardComponent } from './homeboard/homeboard.component';
import { DashComponent } from './homeboard/dash/dash.component';
import { ConfigurationsComponent } from './homeboard/configurations/configurations.component';
import { DismissedAccountComponent } from './homeboard/dismissed-account/dismissed-account.component';
import { PrivacityComponent } from './homeboard/privacity/privacity.component';
import { PurchasesComponent } from './homeboard/purchases/purchases.component';
import { CodePageComponent } from './homeboard/code-page/code-page.component';
import { SecurityComponent } from './homeboard/security/security.component';
import { HomeComponent } from './homeboard/code-page/home/home.component';
import { WebSiteComponent } from './homeboard/code-page/web-site/web-site.component';
import { PagesComponent } from './homeboard/code-page/web-site/pages/pages.component';
import {BillingHistoryComponent} from './homeboard/billing-history/billing-history.component';
import {NextChargesComponent} from './homeboard/next-charges/next-charges.component';
import {OtherWebsitesComponent} from './homeboard/other-websites/other-websites.component';
import {AddCreditCardComponent} from './homeboard/add-credit-card/add-credit-card.component';
import { LogoutComponent } from './homeboard/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    LandingComponent,
    HomeboardComponent,
    DashComponent,
    ConfigurationsComponent,
    DismissedAccountComponent,
    PrivacityComponent,
    PurchasesComponent,
    CodePageComponent,
    SecurityComponent,
    HomeComponent,
    WebSiteComponent,
    PagesComponent,
    BillingHistoryComponent,
    NextChargesComponent,
    OtherWebsitesComponent,
    AddCreditCardComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  //  SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


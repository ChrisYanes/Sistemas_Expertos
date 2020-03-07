import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { LogoutComponent } from './homeboard/logout/logout.component';
import { BillingHistoryComponent } from './homeboard/billing-history/billing-history.component';
import { NextChargesComponent } from './homeboard/next-charges/next-charges.component';
import { OtherWebsitesComponent } from './homeboard/other-websites/other-websites.component';
import { AddCreditCardComponent } from './homeboard/add-credit-card/add-credit-card.component';

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
    LogoutComponent,
    BillingHistoryComponent,
    NextChargesComponent,
    OtherWebsitesComponent,
    AddCreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


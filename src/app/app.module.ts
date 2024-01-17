import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/core/components/login/login.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

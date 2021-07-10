import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import{NgApexchartsModule} from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SymptomsComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

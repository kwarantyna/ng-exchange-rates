import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExchangeRatesComponent } from './exchange-rates/components/exchange-rates.component';
import { CustomPrimeNGModule } from './primeng.module';
import { ExchangeRatesListComponent } from './exchange-rates/components/exchange-rates-list/exchange-rates-list.component';
import { CommonModule, DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesComponent,
    ExchangeRatesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CustomPrimeNGModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    DatePipe,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

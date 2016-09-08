import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import { LegislatorsModule } from './legislators/legislators.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    HomeModule,
    LegislatorsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home/home.component';

/* Feature Modules */
import { LegislatorsModule } from './legislators/legislators.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    LegislatorsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

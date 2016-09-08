import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { homeRouting } from './home.routing';
import { HomeComponent } from './home/home.component';
import { LegislatorsService } from '../legislators/legislators.service';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    homeRouting
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    LegislatorsService
  ]
})
export class HomeModule {}

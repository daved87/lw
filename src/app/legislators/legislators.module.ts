import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { legislatorsRouting } from './legislators.routing';
import { LegislatorsComponent } from './legislators/legislators.component';
import { LegislatorDetailComponent } from './legislator-detail/legislator-detail.component';
import { LegislatorsService } from './legislators.service';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    legislatorsRouting
  ],
  declarations: [
    LegislatorsComponent,
    LegislatorDetailComponent
  ],
  providers: [
    LegislatorsService
  ]
})
export class LegislatorsModule {}

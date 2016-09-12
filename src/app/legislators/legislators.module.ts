import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { legislatorsRouting } from './legislators.routing';
import { LegislatorsComponent } from './legislators/legislators.component';
import { LegislatorsDetailComponent } from './legislators-detail/legislators-detail.component';
import { LegislatorsService } from './legislators.service';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    legislatorsRouting
  ],
  declarations: [
    LegislatorsComponent,
    LegislatorsDetailComponent
  ],
  providers: [
    LegislatorsService
  ]
})
export class LegislatorsModule {}

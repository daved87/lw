import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { legislatorsRouting } from './legislators.routing';
import { LegislatorsComponent } from './legislators/legislators.component';
import { LegislatorDetailComponent } from './legislator-detail/legislator-detail.component';
import { LegislatorsService } from './legislators.service';

@NgModule({
  imports: [
    FormsModule,
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

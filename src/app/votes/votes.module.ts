import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { votesRouting } from './votes.routing';
import { VotesComponent } from './votes/votes.component';
import { BillVotesComponent } from './bill-votes/bill-votes.component';
import { VotesService } from './votes.service';
import { LegislatorVotesComponent } from './legislator-votes/legislator-votes.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    votesRouting,
    ChartsModule
  ],
  declarations: [
    VotesComponent,
    BillVotesComponent,
    LegislatorVotesComponent
  ],
  providers: [
    VotesService
  ]
})
export class VotesModule {}

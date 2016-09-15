import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { VotesComponent } from './votes/votes.component';
import { BillVotesComponent } from './bill-votes/bill-votes.component';
import { LegislatorVotesComponent } from './legislator-votes/legislator-votes.component';

export const votesRoutes: Routes = [
  { path: 'votes', component: VotesComponent },
  { path: 'votes/bill/:id', component: BillVotesComponent },
  { path: 'votes/legislator/:id', component: LegislatorVotesComponent }
];

export const votesRouting: ModuleWithProviders =
                RouterModule.forChild(votesRoutes);

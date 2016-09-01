
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { LegislatorsComponent } from './legislators/legislators.component';
import { LegislatorDetailComponent } from './legislator-detail/legislator-detail.component';

export const legislatorsRoutes: Routes = [
  { path: 'legislators', component: LegislatorsComponent },
  { path: 'legislators/:id', component: LegislatorDetailComponent }
];

export const legislatorsRouting: ModuleWithProviders =
                RouterModule.forChild(legislatorsRoutes);


import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { LegislatorsComponent } from './legislators/legislators.component';
import { LegislatorsDetailComponent } from './legislators-detail/legislators-detail.component';

export const legislatorsRoutes: Routes = [
  { path: 'legislators', component: LegislatorsComponent },
  { path: 'legislators/:id', component: LegislatorsDetailComponent }
];

export const legislatorsRouting: ModuleWithProviders =
                RouterModule.forChild(legislatorsRoutes);

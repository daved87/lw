
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { BillsComponent } from './bills/bills.component';
import { BillsDetailComponent } from './bills-detail/bills-detail.component';

export const billsRoutes: Routes = [
  { path: 'bills', component: BillsComponent },
  { path: 'bills/:id', component: BillsDetailComponent }
];

export const billsRouting: ModuleWithProviders =
                RouterModule.forChild(billsRoutes);

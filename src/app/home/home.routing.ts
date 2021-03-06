
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent }
];

export const homeRouting: ModuleWithProviders =
                RouterModule.forChild(homeRoutes);

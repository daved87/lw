import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { billsRouting } from './bills.routing';
import { BillsComponent } from './bills/bills.component';
import { BillsDetailComponent } from './bills-detail/bills-detail.component';
import { BillsService } from './bills.service';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    billsRouting
  ],
  declarations: [
    BillsComponent,
    BillsDetailComponent
  ],
  providers: [
    BillsService
  ]
})
export class BillsModule {}

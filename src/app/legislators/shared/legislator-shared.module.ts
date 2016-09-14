import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';


@NgModule({
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        SearchDialogComponent
    ] ,
    declarations: [ SearchDialogComponent ]
})
export class LegislatorSharedModule { }

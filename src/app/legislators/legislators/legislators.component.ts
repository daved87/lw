import { Component, OnInit } from '@angular/core';
import { IPage, ILegislator } from '../legislator';
import { LegislatorsService } from '../legislators.service';
import { SearchDialogComponent } from '../shared/search-dialog/search-dialog.component';

@Component({
  moduleId: module.id,
  templateUrl: 'legislators.component.html',
  styleUrls: ['legislators.component.css'],
  directives: [SearchDialogComponent]
})
export class LegislatorsComponent implements OnInit {
  legislators: ILegislator[] = [];
  pageInfo: IPage = {count: 20, per_page: 20, page: 1 };
  errorMessage: string;
  crit: string[] = [];

  constructor(private _legislatorsService: LegislatorsService) { }

  ngOnInit(): void {
      this._legislatorsService.getLegislators(this.crit)
        .subscribe(
          legislators => {
                          this.legislators = legislators.results;
                          this.pageInfo = legislators.page;
                         },
          error => this.errorMessage = <any> error);
  }

  pageChange(page: number): void {
      if (page < 1) { return; }
      if (page > this.pageInfo.count) { return; }
      this.crit['page'] = page;

      this._legislatorsService.getLegislators(this.crit)
        .subscribe(
          legislators => {
                           this.legislators = legislators.results;
                           this.pageInfo = legislators.page;
                         },
          error => this.errorMessage = <any> error);
  }

  updateSearchResults(updatedCriteria: string[]): void {
      this._legislatorsService.getLegislators(updatedCriteria)
        .subscribe(
          legislators => {
                          this.legislators = legislators.results;
                          this.pageInfo = legislators.page;
                         },
          error => this.errorMessage = <any> error);
  }

}

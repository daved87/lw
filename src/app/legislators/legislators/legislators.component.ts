import { Component, OnInit } from '@angular/core';
import { ILegislators, ILegislator } from '../legislator';
import { LegislatorsService } from '../legislators.service';

@Component({
  moduleId: module.id,
  templateUrl: 'legislators.component.html'
})
export class LegislatorsComponent implements OnInit {
  legislators: ILegislator[] = [];
  errorMessage: string;
  crit: any = {};

  constructor(private _legislatorsService: LegislatorsService) { }

  ngOnInit(): void {
      this._legislatorsService.getLegislators(this.crit)
        .subscribe(
          legislators => { this.legislators = legislators.results; console.log(legislators.results); },
          error => this.errorMessage = <any> error);
  }

}
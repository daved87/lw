import { Component, OnInit } from '@angular/core';
import { ILegislators, ILegislator } from '../legislator';
import { LegislatorsService } from '../legislators.service';

@Component({
  moduleId: module.id,
  templateUrl: 'legislators.component.html',
  styleUrls: ['legislators.component.css']
})
export class LegislatorsComponent implements OnInit {
  legislator: ILegislator;
  legislators: ILegislators;
  errorMessage: string;
  crit: any = [];

  constructor(private _legislatorsService: LegislatorsService) { }

  ngOnInit() {
/*    this._legislatorsService.getLegislatorById('C001098')
        .subscribe(
          legislators => { this.legislator = legislators.results[0]; console.log(legislators.results[0]); },
          error => this.errorMessage = <any> error);*/
      this.crit['state'] = 'PA';
      this._legislatorsService.getLegislators({'state': 'PA'})
        .subscribe(
          legislators => { this.legislators = legislators; console.log(legislators); },
          error => this.errorMessage = <any> error);
  }

}

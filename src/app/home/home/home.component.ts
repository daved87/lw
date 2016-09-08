import { Component, OnInit } from '@angular/core';
import { LegislatorsService } from '../../legislators/legislators.service';
import { ILegislator } from '../../legislators/legislator';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  legislators: ILegislator[] = [];
  colSpan: number = 0;
  errorMessage: string = '';


  constructor(private _legislatorService: LegislatorsService) { }

  ngOnInit(): void {
      this._legislatorService.getLegislatorsByCoordinates(30.267153, -97.743061)
          .subscribe(
          legislators => {this.legislators = legislators.results; this.colSpan = legislators.results.length; },
          error => this.errorMessage = <any> error);

    // if ('geolocation' in navigator) {
        // this.getLegislatorsByGeoLocation();
    // } 
  }

  getLegislatorsByGeoLocation(): void {
    navigator.geolocation.getCurrentPosition(function (position) {
      this._legislatorService.getLegislatorsByCoordinates(position.coords.latitude, position.coords.longitude)
      // this._legislatorService.getLegislatorsByCoordinates(30.267153, -97.743061)
          .subscribe(
          legislators => this.legislators = legislators.results,
          error => this.errorMessage = <any> error);
    });
  }
}

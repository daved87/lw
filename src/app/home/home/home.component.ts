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

    // navigator.geolocation.getCurrentPosition(pos => this.getLegislatorsByGeoLocation(pos), this.geoFailure);
  }

  getLegislatorsByGeoLocation(pos): void {
      this._legislatorService.getLegislatorsByCoordinates(pos.coords.latitude, pos.coords.longitude)
          .subscribe(
          legislators => this.legislators = legislators.results,
          error => this.errorMessage = <any> error);
  }

  geoFailure(): void {
    console.log('geo location error');
  }
}

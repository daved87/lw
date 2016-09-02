import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { ILegislator, ILegislators } from './legislator';

@Injectable()
export class LegislatorsService {
  private _legislatorUrl = 'http://congress.api.sunlightfoundation.com/legislators';
  private _apiKey = '?apikey=668537bf3a944df7bfe0b3d13c99f46d';
  constructor(private _http: Http) { }

  getLegislatorById(id: string): Observable<ILegislators> {
    return this._http.get(this._legislatorUrl + this._apiKey + '&bioguide_id=' + id)
      .map((response: Response) => <ILegislators> response.json())
      //.do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
  }

  getLegislatorsByZipCode(zip: number): Observable<ILegislators> {
    return this._http.get(this._legislatorUrl + '/locate' + this._apiKey + '&zip=' + zip)
      .map((response: Response) => <ILegislators> response.json())
      .catch(this.handleError);
  }

  getLegislatorsByCoordinates(lat: number, long: number): Observable<ILegislators> {
    return this._http.get(this._legislatorUrl + '/locate' + this._apiKey + '&latitude=' + lat + '&longitude=' + long)
      .map((response: Response) => <ILegislators> response.json())
      .catch(this.handleError);
  }

  getLegislators(crit: any): Observable<ILegislators> {
    let criteria: string = '';

    $.each(crit, function (key, val) {
      criteria += '&' + key + '=' + val;
    });

    criteria += !('in_office' in crit) ? '&in_office=true' : '';

    return this._http.get(this._legislatorUrl + this._apiKey + criteria)
      .map((response: Response) => <ILegislators> response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}

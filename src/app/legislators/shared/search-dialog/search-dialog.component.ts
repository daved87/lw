import { Component, Output, EventEmitter } from '@angular/core';
import { LegislatorsService } from '../../legislators.service';

@Component({
  moduleId: module.id,
  selector: 'app-search-dialog',
  templateUrl: 'search-dialog.component.html',
  styleUrls: ['search-dialog.component.css']
})
export class SearchDialogComponent {
  @Output() updatedResults = new EventEmitter<string[]>();
  crit: string[] = [];

  constructor(private _legislatorsService: LegislatorsService) { }

  updateSearchResults(): void {
      this.updatedResults.emit(this.crit);

  }

  updateCriteria(obj: any): void {
    this.crit[obj.target.id] = obj.target.value;
  }

}

import { Component, OnChanges, Input,
         Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-search-dialog',
  templateUrl: 'search-dialog.component.html',
  styleUrls: ['search-dialog.component.css']
})
export class SearchDialogComponent implements OnInit {
  @Input() criteria: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {

  }

}

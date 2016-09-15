import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async, inject } from '@angular/core/testing';
import { BillVotesComponent } from './bill-votes.component';

describe('Component: BillVotes', () => {
  it('should create an instance', () => {
    let component = new BillVotesComponent();
    expect(component).toBeTruthy();
  });
});

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async, inject } from '@angular/core/testing';
import { LegislatorVotesComponent } from './legislator-votes.component';

describe('Component: LegislatorVotes', () => {
  it('should create an instance', () => {
    let component = new LegislatorVotesComponent();
    expect(component).toBeTruthy();
  });
});

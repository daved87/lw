import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async, inject } from '@angular/core/testing';
import { VotesComponent } from './votes.component';

describe('Component: Votes', () => {
  it('should create an instance', () => {
    let component = new VotesComponent();
    expect(component).toBeTruthy();
  });
});

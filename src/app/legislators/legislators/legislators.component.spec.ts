/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { LegislatorsComponent } from './legislators.component';

describe('Component: Legislator', () => {
  it('should create an instance', () => {
    let component = new LegislatorsComponent();
    expect(component).toBeTruthy();
  });
});

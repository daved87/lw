/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { LegislatorsService } from './legislators.service';

describe('Service: Legislator', () => {
  beforeEach(() => {
    addProviders([LegislatorsService]);
  });

  it('should ...',
    inject([LegislatorsService],
      (service: LegislatorsService) => {
        expect(service).toBeTruthy();
      }));
});

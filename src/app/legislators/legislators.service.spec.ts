import { async, inject } from '@angular/core/testing';
import { LegislatorsService } from './legislators.service';

describe('Service: Legislator', () => {

  it('should ...',
    inject([LegislatorsService],
      (service: LegislatorsService) => {
        expect(service).toBeTruthy();
      }));
});

/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FloorService } from './floor.service';

describe('Service: Floor', () => {
  beforeEach(() => {
    addProviders([FloorService]);
  });

  it('should ...',
    inject([FloorService],
      (service: FloorService) => {
        expect(service).toBeTruthy();
      }));
});

/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BillsService } from './bills.service';

describe('Service: Bills', () => {
  beforeEach(() => {
    addProviders([BillsService]);
  });

  it('should ...',
    inject([BillsService],
      (service: BillsService) => {
        expect(service).toBeTruthy();
      }));
});

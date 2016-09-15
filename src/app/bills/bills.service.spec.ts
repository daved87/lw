import { async, inject } from '@angular/core/testing';
import { BillsService } from './bills.service';

describe('Service: Bills', () => {

  it('should ...',
    inject([BillsService],
      (service: BillsService) => {
        expect(service).toBeTruthy();
      }));
});

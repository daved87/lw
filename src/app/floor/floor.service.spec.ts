import { async, inject } from '@angular/core/testing';
import { FloorService } from './floor.service';

describe('Service: Floor', () => {

  it('should ...',
    inject([FloorService],
      (service: FloorService) => {
        expect(service).toBeTruthy();
      }));
});

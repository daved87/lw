import { async, inject } from '@angular/core/testing';
import { VotesService } from './votes.service';

describe('Service: Votes', () => {

  it('should ...',
    inject([VotesService],
      (service: VotesService) => {
        expect(service).toBeTruthy();
      }));
});

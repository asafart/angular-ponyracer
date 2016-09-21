import { inject, TestBed } from '@angular/core/testing';

import { RaceService } from './race.service';

describe('RaceService Service', () => {

  let service: RaceService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [RaceService]
  }));

  beforeEach(inject([RaceService], (s: RaceService) => service = s));

  it('should list races', () => {
    const races = service.list();
    expect(races.length).toBe(2, 'The service should return two races for the `list()` method');
  });

});

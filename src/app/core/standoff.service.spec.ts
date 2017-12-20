import { TestBed, inject } from '@angular/core/testing';

import { StandoffService } from './standoff.service';

describe('StandoffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandoffService]
    });
  });

  it('should be created', inject([StandoffService], (service: StandoffService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { TrackersIDService } from './trackers-id.service';

describe('TrackersIDService', () => {
  let service: TrackersIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackersIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

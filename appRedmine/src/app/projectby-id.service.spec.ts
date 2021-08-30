import { TestBed } from '@angular/core/testing';

import { ProjectbyIdService } from './projectby-id.service';

describe('ProjectbyIdService', () => {
  let service: ProjectbyIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectbyIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

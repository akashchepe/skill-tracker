import { TestBed } from '@angular/core/testing';

import { SkillTrackerService } from './skill-tracker.service';

describe('SkillTrackerService', () => {
  let service: SkillTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

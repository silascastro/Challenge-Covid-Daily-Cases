import { TestBed } from '@angular/core/testing';

import { DailyCaseService } from './daily-case.service';

describe('DailyCaseService', () => {
  let service: DailyCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DailyCaseService } from './daily-case.service';

describe('DailyCaseService', () => {
  let service: DailyCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DailyCaseService],
    });
    service = TestBed.inject(DailyCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

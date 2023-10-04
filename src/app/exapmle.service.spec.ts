import { TestBed } from '@angular/core/testing';

import { ExapmleService } from './exapmle.service';

describe('ExapmleService', () => {
  let service: ExapmleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExapmleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

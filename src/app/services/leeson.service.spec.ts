import { TestBed } from '@angular/core/testing';

import { LeesonService } from './leeson.service';

describe('LeesonService', () => {
  let service: LeesonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeesonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

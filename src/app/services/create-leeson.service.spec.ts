import { TestBed } from '@angular/core/testing';

import { CreateLeesonService } from './create-leeson.service';

describe('CreateLeesonService', () => {
  let service: CreateLeesonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateLeesonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

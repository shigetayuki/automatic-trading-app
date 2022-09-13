import { TestBed } from '@angular/core/testing';

import { MxService } from './mx.service';

describe('MxService', () => {
  let service: MxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

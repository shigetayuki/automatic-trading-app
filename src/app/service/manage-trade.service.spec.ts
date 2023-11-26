import { TestBed } from '@angular/core/testing';

import { ManageTradeService } from './manage-trade.service';

describe('ManageTradeService', () => {
  let service: ManageTradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

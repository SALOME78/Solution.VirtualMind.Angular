import { TestBed } from '@angular/core/testing';

import { CurrencyPurchaseService } from './currency-purchase.service';

describe('CurrencyPurchaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyPurchaseService = TestBed.get(CurrencyPurchaseService);
    expect(service).toBeTruthy();
  });
});

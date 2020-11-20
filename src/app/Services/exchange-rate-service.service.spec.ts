import { TestBed } from '@angular/core/testing';

import { ExchangeRateServiceService } from './exchange-rate-service.service';

describe('ExchangeRateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeRateServiceService = TestBed.get(ExchangeRateServiceService);
    expect(service).toBeTruthy();
  });
});

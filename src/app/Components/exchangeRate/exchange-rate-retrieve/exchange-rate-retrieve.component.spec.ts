import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateRetrieveComponent } from './exchange-rate-retrieve.component';

describe('ExchangeRateRetrieveComponent', () => {
  let component: ExchangeRateRetrieveComponent;
  let fixture: ComponentFixture<ExchangeRateRetrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRateRetrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCurrencyListComponent } from './exchange-currency-list.component';

describe('ExchangeCurrencyListComponent', () => {
  let component: ExchangeCurrencyListComponent;
  let fixture: ComponentFixture<ExchangeCurrencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeCurrencyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

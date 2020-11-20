import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCurrencyCreateComponent } from './exchange-currency-create.component';

describe('ExchangeCurrencyCreateComponent', () => {
  let component: ExchangeCurrencyCreateComponent;
  let fixture: ComponentFixture<ExchangeCurrencyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeCurrencyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrencyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

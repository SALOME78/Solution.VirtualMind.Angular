import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialogFormComponent } from './error-dialog-form.component';

describe('ErrorDialogFormComponent', () => {
  let component: ErrorDialogFormComponent;
  let fixture: ComponentFixture<ErrorDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

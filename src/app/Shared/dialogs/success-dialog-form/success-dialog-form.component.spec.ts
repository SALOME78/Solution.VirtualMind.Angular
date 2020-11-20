import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDialogFormComponent } from './success-dialog-form.component';

describe('SuccessDialogFormComponent', () => {
  let component: SuccessDialogFormComponent;
  let fixture: ComponentFixture<SuccessDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

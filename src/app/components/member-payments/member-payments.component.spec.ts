import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPaymentsComponent } from './member-payments.component';

describe('MemberPaymentsComponent', () => {
  let component: MemberPaymentsComponent;
  let fixture: ComponentFixture<MemberPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPlansComponent } from './member-plans.component';

describe('MemberPlansComponent', () => {
  let component: MemberPlansComponent;
  let fixture: ComponentFixture<MemberPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

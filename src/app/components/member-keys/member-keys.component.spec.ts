import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberKeysComponent } from './member-keys.component';

describe('MemberKeysComponent', () => {
  let component: MemberKeysComponent;
  let fixture: ComponentFixture<MemberKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

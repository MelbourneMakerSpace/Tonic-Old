import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberStatsComponent } from './member-stats.component';

describe('MemberStatsComponent', () => {
  let component: MemberStatsComponent;
  let fixture: ComponentFixture<MemberStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

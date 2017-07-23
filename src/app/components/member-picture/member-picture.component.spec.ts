import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPictureComponent } from './member-picture.component';

describe('MemberPictureComponent', () => {
  let component: MemberPictureComponent;
  let fixture: ComponentFixture<MemberPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

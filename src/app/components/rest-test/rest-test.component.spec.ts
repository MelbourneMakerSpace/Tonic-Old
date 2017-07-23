import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestTestComponent } from './rest-test.component';

describe('RestTestComponent', () => {
  let component: RestTestComponent;
  let fixture: ComponentFixture<RestTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

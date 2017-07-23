import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysGridComponent } from './keys-grid.component';

describe('KeysGridComponent', () => {
  let component: KeysGridComponent;
  let fixture: ComponentFixture<KeysGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeysGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

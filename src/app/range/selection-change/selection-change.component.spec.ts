import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionChangeComponent } from './selection-change.component';

describe('SelectionChangeComponent', () => {
  let component: SelectionChangeComponent;
  let fixture: ComponentFixture<SelectionChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

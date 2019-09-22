import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavChild1Component } from './nav-child1.component';

describe('NavChild1Component', () => {
  let component: NavChild1Component;
  let fixture: ComponentFixture<NavChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

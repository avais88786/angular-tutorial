import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavChild2Component } from './nav-child2.component';

describe('NavChild2Component', () => {
  let component: NavChild2Component;
  let fixture: ComponentFixture<NavChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

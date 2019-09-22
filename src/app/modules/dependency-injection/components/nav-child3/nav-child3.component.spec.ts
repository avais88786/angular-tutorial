import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavChild3Component } from './nav-child3.component';

describe('NavChild3Component', () => {
  let component: NavChild3Component;
  let fixture: ComponentFixture<NavChild3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavChild3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

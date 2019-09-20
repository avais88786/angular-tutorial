import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDataComponent } from './self-data.component';

describe('SelfDataComponent', () => {
  let component: SelfDataComponent;
  let fixture: ComponentFixture<SelfDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

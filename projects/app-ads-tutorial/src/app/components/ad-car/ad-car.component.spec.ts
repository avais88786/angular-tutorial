import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCarComponent } from './ad-car.component';

describe('AdCarComponent', () => {
  let component: AdCarComponent;
  let fixture: ComponentFixture<AdCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

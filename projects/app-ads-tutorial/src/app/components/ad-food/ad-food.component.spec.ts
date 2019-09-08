import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFoodComponent } from './ad-food.component';

describe('AdFoodComponent', () => {
  let component: AdFoodComponent;
  let fixture: ComponentFixture<AdFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

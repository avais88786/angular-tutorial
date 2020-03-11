import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyTemplateComponent } from './formly-template.component';

describe('FormlyTemplateComponent', () => {
  let component: FormlyTemplateComponent;
  let fixture: ComponentFixture<FormlyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

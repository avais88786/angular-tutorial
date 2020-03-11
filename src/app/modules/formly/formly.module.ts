import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyTemplateComponent } from './formly-template/formly-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule as FRMMOdule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { Routes, RouterModule } from '@angular/router';


const Route: Routes = [
  {
    path: '',
    component: FormlyTemplateComponent
  }
]


@NgModule({
  declarations: [FormlyTemplateComponent],
  imports: [
    CommonModule,
    FRMMOdule.forChild(),
    FormlyBootstrapModule,
    ReactiveFormsModule,
    RouterModule.forChild(Route)
  ]
})
export class FormlyModule { }

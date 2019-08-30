import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './components/template/template.component';
import { TemplateRouting } from './template.routing';

//https://angular.io/guide/lazy-loading-ngmodules

@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateRouting
  ],
  exports : [
    TemplateComponent
  ]
})
export class TemplateModule { }

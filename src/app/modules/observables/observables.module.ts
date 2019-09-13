import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesRouting } from './observables-routing';
import { MatCardModule } from '@angular/material/card';
import { HomePageComponent } from './components/home-page/home-page.component';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    ObservablesRouting,
    MatCardModule
  ]
})
export class ObservablesModule { }

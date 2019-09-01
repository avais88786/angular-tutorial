import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { TourOfHeroesRouting } from './tour-of-heroes.routing';

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    TourOfHeroesRouting
  ],
  exports: [
    HeroesComponent
  ]
})
export class TourOfHeroesModule { }

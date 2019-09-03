import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { TourOfHeroesRouting } from './tour-of-heroes.routing';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeroesDashboardComponent } from './components/heroes-dashboard/heroes-dashboard.component';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent, LandingPageComponent, HeroesDashboardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    TourOfHeroesRouting
  ],
  exports: [],
  providers: [HeroService]
})
export class TourOfHeroesModule { }

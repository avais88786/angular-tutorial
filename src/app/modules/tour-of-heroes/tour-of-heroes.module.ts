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
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [HeroesComponent,
    HeroDetailComponent,
    LandingPageComponent,
    HeroesDashboardComponent,
    ReactiveFormComponent,
    TemplateFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    TourOfHeroesRouting
  ],
  exports: [],
  providers: []
})
export class TourOfHeroesModule { }

import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { HeroesDashboardComponent } from './components/heroes-dashboard/heroes-dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
    //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: '', component: LandingPageComponent,
        children: [
            { path: '', component: HeroesDashboardComponent },
        ]
    },
    { path: 'dashboard', component: HeroesDashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TourOfHeroesRouting { }

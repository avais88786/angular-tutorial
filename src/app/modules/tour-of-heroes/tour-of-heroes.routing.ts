import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    // {
    //     path: '',
    //     component: HeroesComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TourOfHeroesRouting { }

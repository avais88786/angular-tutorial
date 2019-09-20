import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: 'template',
    loadChildren: () => import('./modules/template/template.module').then(mod => mod.TemplateModule)
  },
  {
    path: 'tour-of-heroes',
    loadChildren: () => import('./modules/tour-of-heroes/tour-of-heroes.module').then(mod => mod.TourOfHeroesModule)
  },
  {
    path: 'ads',
    loadChildren: () => import('../../projects/app-ads-tutorial/src/app/app.module').then(mod => mod.AppModule)
  },
  {
    path: 'observables',
    loadChildren: () => import('./modules/observables/observables.module').then(mod => mod.ObservablesModule)
  },
  {
    path: 'di',
    loadChildren: () => import('./modules/dependency-injection/dependency-injection.module').then(mod => mod.DependencyInjectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

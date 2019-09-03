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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

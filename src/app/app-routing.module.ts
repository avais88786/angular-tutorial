import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SelectivePreloadingStrategyService } from 'projects/app-heroes-navigation/src/app/services/selective-preloading-strategy.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: 'template',
    loadChildren: () => import('./modules/template/template.module')
      .then(mod => mod.TemplateModule)
  },
  {
    path: 'tour-of-heroes',
    loadChildren: () => import('./modules/tour-of-heroes/tour-of-heroes.module')
      .then(mod => mod.TourOfHeroesModule)
  },
  {
    path: 'ads',
    loadChildren: () => import('../../projects/app-ads-tutorial/src/app/app.module')
      .then(mod => mod.AppModule)
  },
  {
    path: 'observables',
    loadChildren: () => import('./modules/observables/observables.module')
      .then(mod => mod.ObservablesModule)
  },
  {
    path: 'di',
    loadChildren: () => import('./modules/dependency-injection/dependency-injection.module')
      .then(mod => mod.DependencyInjectionModule)
  },
  {
    path: 'httpOps',
    loadChildren: () => import('./modules/my-httpclient/my-httpclient.module')
      .then(mod => mod.MyHttpclientModule)
  },
  {
    path: 'hero-nav',
    loadChildren: () => import('../../projects/app-heroes-navigation/src/app/app.module')
      .then(mod => mod.AppModule),
    //outlet: 'navRouterOutlet'
  },
  {
    path: 'formly',
    loadChildren: () => import('../app/modules/formly/formly.module')
      .then(mod => mod.FormlyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      //enableTracing: true,
      //preloadingStrategy: PreloadAllModules  -- PreLoad all modules asynchronously 
      preloadingStrategy: SelectivePreloadingStrategyService
    }) // Debugging purposes
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

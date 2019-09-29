import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './modules/crisis-center/components/crisis-list/crisis-list.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'crisis-center',
        loadChildren: () => import('./modules/crisis-center/crisis-center.module')
          .then(mod => mod.CrisisCenterModule),
      },
      {
        path: 'hero-list',
        loadChildren: () => import('./modules/crisis-center/crisis-center.module')
          .then(mod => mod.CrisisCenterModule),
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    //RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './modules/crisis-center/components/crisis-list/crisis-list.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthGuard } from './modules/auth/auth.guard';


const routes: Routes = [
  {
    path: 'load',
    component: AppComponent,
    children: [
      {
        path: 'crisis-center',
        loadChildren: () => import('./modules/crisis-center/crisis-center.module')
          .then(mod => mod.CrisisCenterModule),
        data: {
          preload: true
        }
      },
      {
        path: 'hero-list',
        component: HeroesListComponent
      },
      {
        path: 'hero/:id',
        component: HeroDetailsComponent
      },
      {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
      },
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
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

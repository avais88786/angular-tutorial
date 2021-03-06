import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './components/crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './components/crisis-center-home/crisis-center-home.component';
import { CrisesService } from './services/crises.service';
import { CrisisDetailResolverService } from './services/crisis-detail-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            //canDeactivate: [CanDeactivateGuard], not done...
            resolve: {
              crisis: CrisisDetailResolverService
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  declarations: [CrisisListComponent, CrisisCenterComponent, CrisisDetailComponent, CrisisCenterHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class CrisisCenterModule { }

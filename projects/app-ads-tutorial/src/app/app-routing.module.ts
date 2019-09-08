import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';


const routes: Routes = [
  {
    path: '',
    component: AdBannerComponent
  }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

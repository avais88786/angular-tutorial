import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';


const routes: Routes = [
  { path: '', component: LandingPageComponent }
];

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class MyHttpclientModule { }

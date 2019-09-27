import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './modules/template/template.module';
import { TourOfHeroesModule } from './modules/tour-of-heroes/tour-of-heroes.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppModule as adsModule, AdsSharedModule } from '../../projects/app-ads-tutorial/src/app/app.module';
import { HttpInterceptorService } from './modules/my-httpclient/services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    TemplateModule,
    HttpClientModule
    // TourOfHeroesModule,
    //adsModule
    //AdsSharedModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

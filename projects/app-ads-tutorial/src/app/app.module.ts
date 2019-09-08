import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { AdCarComponent } from './components/ad-car/ad-car.component';
import { AdFoodComponent } from './components/ad-food/ad-food.component';
import { AdHostDirective } from './directives/ad-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    AdCarComponent,
    AdFoodComponent,
    AdHostDirective
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class AdsSharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}

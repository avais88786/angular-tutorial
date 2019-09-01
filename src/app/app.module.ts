import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './modules/template/template.module';
import { routing } from './app.routing';
import { TourOfHeroesModule } from './modules/tour-of-heroes/tour-of-heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    NoopAnimationsModule,
    TemplateModule,
    TourOfHeroesModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

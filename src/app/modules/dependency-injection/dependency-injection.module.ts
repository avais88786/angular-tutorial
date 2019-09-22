import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionalComponent } from './components/optional/optional.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { Routes, RouterModule } from '@angular/router';
import { SelfNoDataComponent } from './components/self-no-data/self-no-data.component';
import { SelfDataComponent } from './components/self-data/self-data.component';
import { HostComponent } from './components/host/host.component';
import { DiProvidersComponent } from './components/di-providers/di-providers.component';
import { NewLoggerService } from './services/new-logger.service';
import { Logger } from './services/iLogger';
import { OldLoggerService } from './services/old-logger.service';
import { ServiceWithFactoryproviderService, factoryProviderService } from './services/service-with-factoryprovider.service';
import { NavParentComponent } from './components/nav-parent/nav-parent.component';
import { NavChild1Component } from './components/nav-child1/nav-child1.component';
import { NavChild2Component } from './components/nav-child2/nav-child2.component';
import { NavChild3Component } from './components/nav-child3/nav-child3.component';

const silentLogger = {
  logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
  log: () => {
    return 'Coming from silentLogger';
  }
};

const routes: Routes = [
  { path: '', component: LandingPageComponent }
];


@NgModule({
  declarations: [
    OptionalComponent,
    LandingPageComponent,
    SelfNoDataComponent,
    SelfDataComponent,
    HostComponent,
    DiProvidersComponent,
    NavParentComponent,
    NavChild1Component,
    NavChild2Component,
    NavChild3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    NewLoggerService,
    { provide: OldLoggerService, useExisting: NewLoggerService },
    { provide: 'ILogger', useClass: NewLoggerService },
    { provide: 'ILoggerWithUseValue', useValue: silentLogger },
    { provide: ServiceWithFactoryproviderService, useFactory: factoryProviderService, deps: [NewLoggerService] },
    { provide: 'MultiInstances', useExisting: NewLoggerService, multi: true },
    { provide: 'MultiInstances', useExisting: OldLoggerService, multi: true }
  ]
})
export class DependencyInjectionModule { }

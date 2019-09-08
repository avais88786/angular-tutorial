import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { iAdMetadata } from '../../services/iAdMetadata';
import { AdItem } from '../../models/ad-Item';
import { AdHostDirective } from '../../directives/ad-host.directive';
import { AdServiceService } from '../../services/ad-service.service';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdHostDirective, {static: true}) adHost: AdHostDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private adService: AdServiceService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as iAdMetadata).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}

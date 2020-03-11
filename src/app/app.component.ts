import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HeroService } from './modules/tour-of-heroes/services/hero.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'tour-of-heroes';
  hideLandingPage = false;
  countdownTimer = 2;
  urlDetails: UrlSegment[] = [];
  images = [1, 2, 3, 4, 5, 6, 7].map((x: number) => {

    let rteLink: string;
    let btnText: string;

    switch (x) {
      case 1:
      rteLink = 'tour-of-heroes';
      btnText = 'Give me a Tour Of Heroes';
      break;

      case 2:
      rteLink = 'ads';
      btnText = 'Take me to ads';
      break;

      case 3:
      rteLink = 'observables';
      btnText = 'Show me Observables';
      break;

      case 4:
      rteLink = 'di';
      btnText = 'Talk about Dependency Injection';
      break;

      case 5:
      rteLink = 'httpOps';
      btnText = 'Demonstrate HTTP Client operations';
      break;

      case 6:
      rteLink = 'hero-nav/load';
      btnText = 'Teach me Navigation using Crisis Center';
      break;

      case 7:
      rteLink = 'formly';
      btnText = 'Formly Learning';
      break;

    }

    return {
      imgSrc: `https://picsum.photos/900/500?random&t=${Math.random()}`,
      routeLink : rteLink,
      buttonText : btnText
    };
    //return `https://picsum.photos/900/500?random&t=${Math.random()}`;

  });

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  constructor(private heroService: HeroService,
    private activateRoute: ActivatedRoute) {
  }

  ngAfterViewInit() {
    const x = setInterval(() => {
      this.countdownTimer = this.countdownTimer - 1;
      if (this.countdownTimer === 0) {
        this.hideLandingPage = true;
        clearInterval(x);
        this.carousel.pause();
      }
    }, 1000);

  }

  ngOnInit() {
    this.activateRoute.url.subscribe(url => {
      this.urlDetails = url;
    });
    this.urlDetails = this.activateRoute.snapshot.url;
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HeroService } from './modules/tour-of-heroes/services/hero.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';

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
  constructor(private heroService: HeroService,
              private activateRoute: ActivatedRoute) { }

  ngAfterViewInit() {
    const x = setInterval(() => {
      this.countdownTimer = this.countdownTimer - 1;
      if (this.countdownTimer === 0) {
        this.hideLandingPage = true;
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(x);
    }, 2000);
  }

  ngOnInit() {
    
    this.activateRoute.url.subscribe(url => {
      this.urlDetails = url;
    });
    this.urlDetails = this.activateRoute.snapshot.url;
  }

}

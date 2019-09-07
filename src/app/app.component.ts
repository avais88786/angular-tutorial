import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HeroService } from './modules/tour-of-heroes/services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'tour-of-heroes';
  hideLandingPage = false;
  countdownTimer = 2;
  constructor(private heroService: HeroService) { }

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

  }

}

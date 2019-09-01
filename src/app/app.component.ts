import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'tour-of-heroes';
  hideLandingPage = false;
  countdownTimer = 3;
  constructor() { }

  ngAfterViewInit() {
    const x = setInterval(() => {
      this.countdownTimer = this.countdownTimer - 1;
      if (this.countdownTimer === 0) {
        this.hideLandingPage = true;
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(x);
    }, 3000);
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  hideLandingPage = false;
  countdownTimer = 3;
  constructor() { }

  ngOnInit() {
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
}

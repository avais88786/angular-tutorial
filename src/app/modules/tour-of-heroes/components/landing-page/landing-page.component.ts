import { Component, OnInit } from '@angular/core';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-heroes-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert(`production mode: ${environment.production}`);
  }

}

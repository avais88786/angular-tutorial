import { Component, OnInit } from '@angular/core';

import { HEROES } from '../../services/mock-heroes';
import { Hero } from '../../models/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}

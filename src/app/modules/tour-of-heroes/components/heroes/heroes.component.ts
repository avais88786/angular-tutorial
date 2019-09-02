import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/Hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  heroesLoaded = false;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroesLoaded = true;
      this.heroes = heroes;
    });
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}

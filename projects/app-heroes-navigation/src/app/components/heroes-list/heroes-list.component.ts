import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/modules/tour-of-heroes/models/Hero';
import { HeroService } from '@services/hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(x => {
      this.heroes = x;
    });
  }

}

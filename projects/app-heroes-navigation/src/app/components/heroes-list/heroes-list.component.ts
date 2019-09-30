import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/modules/tour-of-heroes/models/Hero';
import { HeroService } from '@services/hero.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[];
  selectedId: number;

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(x => {
      this.heroes = x;
    });

    this.route.paramMap.subscribe((par: ParamMap) => {
      this.selectedId = +par.get('id');
    });

  }

}

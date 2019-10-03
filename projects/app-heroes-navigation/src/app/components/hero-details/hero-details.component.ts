import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/modules/tour-of-heroes/models/Hero';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HeroService } from '@services/hero.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-details2',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.hero$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => this.heroService.getHero(parseInt(params.get('id'))))
    );
  }

  goBack(){
    this.hero$.subscribe(hero => {
      this.router.navigate(['/hero-nav/load/hero-list', {id: hero.id, foo: 'bar'}]);
    });
  }

}

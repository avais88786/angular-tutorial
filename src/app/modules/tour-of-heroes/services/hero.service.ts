import { Injectable, Optional } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero, SuperHero } from '../models/Hero';
import { HEROES } from './mock-heroes';
import * as casual from 'casual';
import { LoggerService } from './logger.service';

@Injectable(
  { providedIn: 'root' }
)
export class HeroService {

  constructor(@Optional() private logger: LoggerService) { }

  getHeroes(): Observable<Hero[]> {

    if (this.logger) {
      this.logger.log('I am returning heroes');
    }

    return new Observable<Hero[]>((obss) => {
      setTimeout(() => {
        obss.next(HEROES);
      }, 1000);
    });
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(h => h.id === id));
  }

  getRandomHero(): SuperHero {
    const randomHero = Object.assign(new SuperHero(), HEROES[1]);
    randomHero.alterEgo = casual.sentence;
    return randomHero;
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/Hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return new Observable<Hero[]>((obss) => {
      setTimeout(() => {
        obss.next(HEROES);
      }, 3000);
    });
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(h => h.id === id));
  }
}

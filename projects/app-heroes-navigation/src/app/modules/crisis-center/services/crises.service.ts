import { Injectable, forwardRef } from '@angular/core';
import { CrisisCenterModule } from '../crisis-center.module';
import { Observable, of } from 'rxjs';
import { Crisis } from './crisis';
import * as Casual from 'casual';

@Injectable({
  providedIn: 'root'
})
export class CrisesService {

  getCrisis(id: number): Observable<Crisis> {
    return of(new Crisis(id, Casual.sentence));
  }

  constructor() { }

  getCrises(): Observable<Crisis[]> {

    const _crisis: Crisis[] = [];
    for (let i = 0; i < 4; i++) {
      const x = i + 1;
      _crisis.push(new Crisis(x, Casual.sentence));
    }

    return of(_crisis);
  }

}

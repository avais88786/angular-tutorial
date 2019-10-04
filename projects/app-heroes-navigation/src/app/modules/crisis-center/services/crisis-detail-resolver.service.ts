import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Crisis } from './crisis';
import { CrisesService } from './crises.service';
import { switchMap, take, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis> {

  constructor(private crisisService: CrisesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {

    const id = +route.paramMap.get('id');

    if (id >= 4 || !this.router.getCurrentNavigation()) {
      this.router.navigate(['/hero-nav/load/crisis-center']);
    }

    return this.crisisService.getCrisis(id).pipe(
      switchMap<Crisis, Observable<Crisis>>((x: Crisis) => {
        return of(new Crisis(id, this.router.getCurrentNavigation().extras.state.data));
      })
    );

  }
}

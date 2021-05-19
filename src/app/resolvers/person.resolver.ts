import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Personne } from '../interfaces/personne';
import { PersonneService } from '../shared/personne.service';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonResolver implements Resolve<Personne[]> {

  constructor(private personneService: PersonneService, private route: Router) { }

  // Les Resolver d'Angular permettent d'attendre le
  // retour d'un observable avant d'initialiser / mettre à
  // jour un composant après une mise à jour de l'url.

  // Le Resolver est un service que l'on associe à la route du composant.

  resolve(): Observable<any> {
    return this.personneService.getAllPersons()
      .pipe(map(res => {
        console.log(res);
        return res;
      }),
        catchError(() => {
          this.route.navigate(['/error']);
          return EMPTY;
      }));
  }
}







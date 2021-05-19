import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Personne } from "../interfaces/personne";
import { map, catchError } from 'rxjs/operators';
import { PersonneService } from '../shared/personne.service';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsResolver implements Resolve<Personne> {
  constructor(private personneService: PersonneService, private route:Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let id:any = route.paramMap.get('id');
    return this.personneService.getPerson(id)
      .pipe(map(res => {
        console.log(res[0]);
        return res[0];
      }),
        catchError(() => {
          this.route.navigate(['/error']);
          return EMPTY;
      }));
  }

}

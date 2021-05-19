import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../shared/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // Guard 
  // Une service angular qui implémente une des interfaces suivantes :
  // canActivate : vérifie si un utilisateur peut visiter une route
  // On veut que l'accès à la route personne soit seulement autoriser aux utilisateurs authentifiés

  constructor(private router: Router, private tokenService: TokenStorageService) { }

// canActivate vérifie si un utilisateur peut visiter une route
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      // Pour récupérer une variable de localStorage
      if(Boolean(this.tokenService.getToken())){
    return true;
    }
    else {
      this.router.navigateByUrl('/auth');
      return false;
      }
  }
  
}

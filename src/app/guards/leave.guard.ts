import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TemplateFormComponent } from '../composants/formulaires/template-form/template-form.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<TemplateFormComponent> {
  canDeactivate(
    component: TemplateFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean{
    return component.personne.nom === undefined || 
    component.personne.prenom === undefined || 
    component.personne.nom.length === 0 || 
    component.personne.prenom.length === 0 ||
    confirm('Voulez-vous vraiment quitter ce formulaire ?');
  }
  
}

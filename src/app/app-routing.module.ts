import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Personne } from './classes/personne';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { AuthComponent } from './composants/auth/auth.component';
import { ErrorComponent } from './composants/error/error.component';
import { CalculetteComponent } from './composants/formulaires/calculette/calculette.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { TpFormComponent } from './composants/formulaires/tp-form/tp-form.component';
import { HomeComponent } from './composants/home/home.component';
import { DeveloperComponent } from './composants/interactions/exercices/developer/developer.component';
import { FeaturesComponent } from './composants/interactions/features/features.component';
import { AddressFormComponent } from './composants/materials/address-form/address-form.component';
import { TableComponent } from './composants/materials/table/table.component';
import { TreeComponent } from './composants/materials/tree/tree.component';
import { PersonneDetailsComponent } from './composants/personne/personne-details/personne-details.component';
import { PersonneEditComponent } from './composants/personne/personne-edit/personne-edit.component';
import { PersonneComponent } from './composants/personne/personne/personne.component';
import { ProfileComponent } from './composants/profile/profile.component';
import { RegisterComponent } from './composants/register/register.component';
import { RocketEditComponent } from './composants/rockets/rocket-edit/rocket-edit.component';
import { RocketComponent } from './composants/rockets/rocket/rocket.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AuthGuard } from './guards/auth.guard';
import { LeaveGuard } from './guards/leave.guard';
import { CamionComponent } from './modules/vehicule/camion/camion.component';
import { VoitureComponent } from './modules/vehicule/voiture/voiture.component';
import { PersonDetailsResolver } from './resolvers/person-details.resolver';
import { PersonResolver } from './resolvers/person.resolver';


const routes: Routes = [
  // localhost:4200/
  { path: 'home', component: HomeComponent },
  // localhost:4200/stagiaire
  { path: 'stagiaire', component: StagiaireComponent },
  // localhost:4200/stagiaire/John/Doe
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  // localhost:4200/template-form
  { path: 'template-form', component: TemplateFormComponent, canDeactivate:[LeaveGuard] },
  // localhost:4200/reactive-form
  { path: 'reactive-form', component: ReactiveFormComponent },
  // localhost:4200/adresse
  { path: 'adresse', component: AdresseComponent },
  // localhost:4200/adresse/Nice/06000
  { path: 'adresse/:ville/:codePostal', component: AdresseComponent },
  // localhost:4200/calculette
  { path: 'calculette', component: CalculetteComponent },
  // localhost:4200/tp-form
  { path: 'tp-form', component: TpFormComponent },
  // localhost:4200/personne
  // On associe un resolver et une guard à la route /personne
  { path: 'personne', runGuardsAndResolvers: 'always', component: PersonneComponent, resolve: { routeResolver: PersonResolver }, canActivate: [AuthGuard]},


  // localhost:4200/details/:id
  { path: 'details/:id', component: PersonneDetailsComponent ,  resolve: { personne : PersonDetailsResolver }  },
  // localhost:4200/edit/:id
  { path: 'edit/:id', component: PersonneEditComponent },
  // localhost:4200/rocket
  { path: 'rocket', component: RocketComponent },
  // localhost:4200/rocket/:id
  { path: 'edit-rocket/:id', component: RocketEditComponent },

  { path: 'address-form', component: AddressFormComponent },
  { path: 'table', component: TableComponent },
  { path: 'tree', component: TreeComponent },



  { path: 'register', component: RegisterComponent },

  { path: 'auth', component: AuthComponent },

  { path: 'profile', component: ProfileComponent ,canActivate: [AuthGuard] },

  // Cahrgement des routes du sous-module véhicule en mode eager loading.
  // C'est à dire on charge le sous module véhicule au démarrage de l'application

  // { path: 'vehicule', children: [
  //   { path: 'camion', component: CamionComponent },
  //   { path: 'voiture', component: VoitureComponent },
  //   { path: '', redirectTo: 'camion', pathMatch : 'full' }
  // ] },

  // Chargement des routes du sous-module véhicule en mode lazy loading.
  // C'est à dire on charge le sous module véhicule seulement à l'appel des routes/chemins
  // Avec cette m"thode il faut retirer vehicule des imports dans app-routing.component.ts
  { path: 'vehicule', loadChildren: () => import('./modules/vehicule/vehicule.module')
    .then(m => m.VehiculeModule) 
  },

  { path: 'features', component: FeaturesComponent },

  { path: 'developer', component: DeveloperComponent },

  // localhost:4200/error
  { path: 'error', component: ErrorComponent },
  // pathMatch = "full" signifie que tout chemin d url doit correspondre
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // On affichera error.component en cas de chemin inexistant
  { path: '**', redirectTo: '/error' },
];

//  enableTracing: true permet de garder une trace de la recherche d’un chemin (pour
//  le debogage).
@NgModule({
  // preloadAllModules permet de cherger tous les modules sans attendre qu'ils soient visités
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  })
export class AppRoutingModule { }

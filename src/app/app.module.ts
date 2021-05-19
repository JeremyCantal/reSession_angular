import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculetteComponent } from './composants/formulaires/calculette/calculette.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { TpFormComponent } from './composants/formulaires/tp-form/tp-form.component';
import { PersonneComponent } from './composants/personne/personne/personne.component';
import { PersonneDetailsComponent } from './composants/personne/personne-details/personne-details.component';
import { PersonneEditComponent } from './composants/personne/personne-edit/personne-edit.component';
import { RocketComponent } from './composants/rockets/rocket/rocket.component';
import { RocketEditComponent } from './composants/rockets/rocket-edit/rocket-edit.component';
import { NgxBootstrapModule } from './shared/modules/ngx-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { TableComponent } from './composants/materials/table/table.component';
import { AddressFormComponent } from './composants/materials/address-form/address-form.component';
import { TreeComponent } from './composants/materials/tree/tree.component';
import { AuthComponent } from './composants/auth/auth.component';
import { RegisterComponent } from './composants/register/register.component';
import { ProfileComponent } from './composants/profile/profile.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { FeatureCardComponent } from './composants/interactions/feature-card/feature-card.component';
import { FeaturesComponent } from './composants/interactions/features/features.component';
import { DeveloperComponent } from './composants/interactions/exercices/developer/developer.component';
import { SkillComponent } from './composants/interactions/exercices/skill/skill.component';
;


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdresseComponent,
    StagiaireComponent,
    ErrorComponent,
    TemplateFormComponent,
    CalculetteComponent,
    ReactiveFormComponent,
    TpFormComponent,
    PersonneComponent,
    PersonneDetailsComponent,
    PersonneEditComponent,
    RocketComponent,
    RocketEditComponent,
    TableComponent,
    AddressFormComponent,
    TreeComponent,
    AuthComponent,
    RegisterComponent,
    ProfileComponent,
    FeatureCardComponent,
    FeaturesComponent,
    DeveloperComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxBootstrapModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){ console.log("App-module"); }
}

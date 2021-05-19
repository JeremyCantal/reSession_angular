import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculeRoutingModule } from './vehicule-routing.module';
import { VoitureComponent } from './voiture/voiture.component';
import { CamionComponent } from './camion/camion.component';


@NgModule({
  declarations: [
    VoitureComponent,
    CamionComponent
  ],
  imports: [
    CommonModule,
    VehiculeRoutingModule
  ]
})
export class VehiculeModule {
  constructor(){ console.log("Vehicule-module"); }
 }

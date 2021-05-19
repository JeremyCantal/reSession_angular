import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamionComponent } from './camion/camion.component';
import { VoitureComponent } from './voiture/voiture.component';

const routes: Routes = [
  { path: 'camion', component: CamionComponent },
  { path: 'voiture', component: VoitureComponent },
  { path: '', redirectTo: 'camion', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule { }

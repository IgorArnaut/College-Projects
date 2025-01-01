import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtikliComponent } from './artikli/artikli.component';
import { PrijavaComponent } from './forme/prijava/prijava.component';
import { PodesavanjaComponent } from './podesavanja/podesavanja.component';
import { podesavanjaGuard } from './podesavanja.guard';
import { OdjavaComponent } from './odjava/odjava.component';

const routes: Routes = [
  {
    path: 'artikli',
    component: ArtikliComponent,
  },
  {
    path: 'prijava',
    component: PrijavaComponent,
  },
  {
    path: 'odjava',
    component: OdjavaComponent,
  },
  {
    path: 'podesavanja',
    component: PodesavanjaComponent,
    canActivate: [podesavanjaGuard],
  },
  { path: '**', component: ArtikliComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

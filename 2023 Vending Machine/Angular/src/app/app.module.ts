import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtikalComponent } from './artikal/artikal.component';
import { ArtikliComponent } from './artikli/artikli.component';
import { KupovinaComponent } from './forme/kupovina/kupovina.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OdjavaComponent } from './odjava/odjava.component';
import { PodesavanjaComponent } from './podesavanja/podesavanja.component';
import { PrijavaComponent } from './forme/prijava/prijava.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtikalComponent,
    ArtikliComponent,
    KupovinaComponent,
    NavbarComponent,
    OdjavaComponent,
    PodesavanjaComponent,
    PrijavaComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

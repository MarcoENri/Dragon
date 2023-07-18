import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { CuelloComponent } from './cuello/cuello.component';
import { AlasComponent } from './alas/alas.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PatastraserasComponent } from './patastraseras/patastraseras.component';
import { ColaComponent } from './cola/cola.component';
import { OjosComponent } from './cabeza/ojos/ojos.component';
import { CuernosComponent } from './cabeza/cuernos/cuernos.component';
import { FlexibilidadComponent } from './cuello/flexibilidad/flexibilidad.component';
import { FortalezaComponent } from './cuello/fortaleza/fortaleza.component';
import { MembranasAlaresComponent } from './alas/membranas-alares/membranas-alares.component';
import { AmpliaEnvergaduraComponent } from './alas/amplia-envergadura/amplia-envergadura.component';
import { EscamasProtectorasComponent } from './cuerpo/escamas-protectoras/escamas-protectoras.component';
import { GrandeComponent } from './cuerpo/grande/grande.component';
import { MusculaturaComponent } from './patastraseras/musculatura/musculatura.component';
import { GarrasComponent } from './patastraseras/garras/garras.component';
import { EspinasComponent } from './cola/espinas/espinas.component';
import { EquilibrioComponent } from './cola/equilibrio/equilibrio.component';

@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    CuelloComponent,
    AlasComponent,
    CuerpoComponent,
    PatastraserasComponent,
    ColaComponent,
    OjosComponent,
    CuernosComponent,
    FlexibilidadComponent,
    FortalezaComponent,
    MembranasAlaresComponent,
    AmpliaEnvergaduraComponent,
    EscamasProtectorasComponent,
    GrandeComponent,
    MusculaturaComponent,
    GarrasComponent,
    EspinasComponent,
    EquilibrioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

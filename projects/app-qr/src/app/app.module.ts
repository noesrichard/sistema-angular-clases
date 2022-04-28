import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AgenciasModule} from './agencias/agencias.module';
import { PageAgenciaComponent } from './agencias/pages/page-agencia/page-agencia.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { PageLoginComponent } from './core/page/page-login/page-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, 
    AgenciasModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }

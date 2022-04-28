import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAgenciaComponent } from './pages/page-agencia/page-agencia.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    PageAgenciaComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    AppRoutingModule   
  ], 
  exports: [
      PageAgenciaComponent
  ]
})
export class AgenciasModule { }

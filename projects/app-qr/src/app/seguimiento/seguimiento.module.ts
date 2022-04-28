import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSeguimientoComponent } from './pages/page-seguimiento/page-seguimiento.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageSeguimientoComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ]
})
export class SeguimientoModule { }

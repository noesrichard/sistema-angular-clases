import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesEmpleadosComponent } from './pages/pages-empleados/pages-empleados.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesEmpleadosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class EmpleadosModule { }

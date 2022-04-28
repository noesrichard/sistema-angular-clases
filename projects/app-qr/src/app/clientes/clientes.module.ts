import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesClientesComponent } from './pages/pages-clientes/pages-clientes.component';



@NgModule({
  declarations: [
    PagesClientesComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ], 
  exports:[
    PagesClientesComponent
  ]
})
export class ClientesModule { }

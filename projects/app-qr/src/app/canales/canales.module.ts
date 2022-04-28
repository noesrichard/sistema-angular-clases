import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCanalesComponent } from './pages/page-canales/page-canales.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageCanalesComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ], 
  exports:[
      PageCanalesComponent
  ]
})
export class CanalesModule { }

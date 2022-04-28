import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageQrComponent } from './pages/page-qr/page-qr.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageQrComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class QuejasReclamosModule { }

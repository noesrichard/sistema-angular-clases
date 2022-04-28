import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent, 
  ],
  imports: [
    CommonModule, 
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ], 
  exports: [
      PageLoginComponent
  ]
})
export class CoreModule { }

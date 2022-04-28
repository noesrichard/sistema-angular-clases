import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciasModule } from './agencias/agencias.module';
import { PageAgenciaComponent } from './agencias/pages/page-agencia/page-agencia.component';
import { ClientesModule } from './clientes/clientes.module';
import { PagesClientesComponent } from './clientes/pages/pages-clientes/pages-clientes.component';
import { LoginComponent } from './core/components/login/login.component';
import { PageLoginComponent } from './core/page/page-login/page-login.component';
import { EmpleadosModule } from './empleados/empleados.module';
import { PagesEmpleadosComponent } from './empleados/pages/pages-empleados/pages-empleados.component';
import { PageQrComponent } from './quejas-reclamos/pages/page-qr/page-qr.component';
import { QuejasReclamosModule } from './quejas-reclamos/quejas-reclamos.module';

const routes: Routes = [
    {path: '', component: PageLoginComponent},
    {path: 'agencias', component: PageAgenciaComponent},
    {path: 'clientes', component: PagesClientesComponent},
    {path: 'empleados', component: PagesEmpleadosComponent},
    {path: 'quejas-reclamos', component: PageQrComponent},
    {path: 'empleados', component: PagesEmpleadosComponent},
    {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

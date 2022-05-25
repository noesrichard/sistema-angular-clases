import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { PageLoginComponent } from './core/page/page-login/page-login.component';

const routes: Routes = [
    { path: '', component: PageLoginComponent },
    { path: 'home', component: MenuComponent },
    { path: 'login', component: LoginComponent },

    { path: 'agencias', loadChildren: () => import('./agencias/agencias.module').then((m) => m.AgenciasModule), },
    { path: 'canales', loadChildren: () => import('./canales/canales.module').then((m) => m.CanalesModule), },
    { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then((m) => m.ClientesModule), },
    { path: 'empleados', loadChildren: () => import('./empleados/empleados.module').then( (m) => m.EmpleadosModule), },
    { path: 'qr', loadChildren: () => import('./quejas-reclamos/quejas-reclamos.module').then( (m) => m.QuejasReclamosModule), },
    { path: 'seguimiento', loadChildren: () => import('./seguimiento/seguimiento.module').then( (m) => m.SeguimientoModule), },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

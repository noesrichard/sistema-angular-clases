import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciasRoutingModule } from './agencias-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [PageListComponent, FormComponent],
    imports: [
        CommonModule,
        AgenciasRoutingModule,
        SharedModule,
        MatTableExporterModule,
        ReactiveFormsModule,
    ],
})
export class AgenciasModule {}

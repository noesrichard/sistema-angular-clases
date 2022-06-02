import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaz/metacolumn.interface';
import { environment } from 'projects/app-qr/src/environments/environment';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KeypadButton } from '../../../shared/components/interfaces/keypadbutton';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DownloadComponent } from '../../../shared/components/download/download.component';
import { AgenciaService } from '../../services/agencia.service';
import { FormComponent } from '../../components/form/form.component';

@Component({
    selector: 'qr-page-list',
    templateUrl: './page-list.component.html',
    styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
    recordsAgency: any[] = [];
    metaDataColumns: MetaDataColumn[] = [
        { field: '_id', title: 'ID' },
        { field: 'name', title: 'AGENCIA' },
        { field: 'address', title: 'DIRECCION' },
    ];

    keypadButton: KeypadButton[] = [
        {
            icon: 'cloud_download',
            tooltip: 'Descargar',
            color: 'accent',
            action: 'DOWNLOAD',
        },
        { icon: 'add', tooltip: 'Agregar', color: 'primary', action: 'NEW' },
    ];
    constructor(
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        private bottomSheet: MatBottomSheet,
        private agencyService: AgenciaService
    ) {
        this.changePage(0);
    }

    ngOnInit(): void {
        this.loadAgencies();
    }

    data: any[] = [];
    //totalRecords = this.recordsAgency.length;
    totalRecords = 0;

    changePage(page: number) {
        const pageSize = environment.PAGE_SIZE;
        const skip = pageSize * page;
        this.data = this.recordsAgency.slice(skip, skip + pageSize);
    }

    openForm(row: any = null) {
        const options = {
            panelClass: 'panel-container',
            disableClose: true,
            data: row,
        };
        const reference: MatDialogRef<FormComponent> = this.dialog.open(
            FormComponent,
            options
        );
        reference.afterClosed().subscribe((response) => {
            console.log(response); 
            if (!response) {
                return;
            }
            if (response.id) {
                const agency = { ...response };
                console.log(agency); 
                this.agencyService
                    .updateAgency(response.id, agency)
                    .subscribe(() => {
                        this.changePage(0);
                        this.showMessage('Registro actualizado');
                    });
            } else {
                const agency = { ...response };
                this.agencyService.addAgency(agency).subscribe(() => {
                    this.changePage(0);
                    this.showMessage('Registro exitoso');
                });
            }
        });
    }

    delete(id: number) {
        const reference: MatDialogRef<ConfirmComponent> = this.dialog.open(
            ConfirmComponent,
            {
                width: '320px',
                disableClose: true,
            }
        );
        reference.componentInstance.message =
            'Esta seguro de eliminar la agencia';
        reference.afterClosed().subscribe((result) => {
            if (!result) {
                return;
            }
            const position = this.recordsAgency.findIndex((el) => el.id === id);
            this.recordsAgency.splice(position, 1);

            this.changePage(0);
            this.showMessage('Eliminado correctamente');
        });
    }

    showMessage(message: string, duration: number = 2000) {
        this.snackBar.open(message, '', { duration: duration });
    }

    doAction(action: string) {
        switch (action) {
            case 'DOWNLOAD':
                this.showBottomSheet(
                    'Lista de agencias',
                    'agencias',
                    this.recordsAgency
                );
                break;
            case 'NEW':
                this.openForm();
                break;
        }
    }

    showBottomSheet(title: string, fileName: string, data: any) {
        this.bottomSheet.open(DownloadComponent, {
            data: {
                rows: this.recordsAgency,
                headers: this.metaDataColumns,
            },
        });
    }

    loadAgencies() {
        this.agencyService.loadAgencias().subscribe((data) => {
            console.log(data);
            this.recordsAgency = data;
            this.totalRecords = this.recordsAgency.length;
            this.changePage(0);
        });
    }
}

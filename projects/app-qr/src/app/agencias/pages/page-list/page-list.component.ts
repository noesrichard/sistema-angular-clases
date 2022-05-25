import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaz/metacolumn.interface';
import { environment } from 'projects/app-qr/src/environments/environment';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KeypadButton } from '../../../shared/components/interfaces/keypadbutton';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DownloadComponent } from '../../../shared/components/download/download.component';

@Component({
    selector: 'qr-page-list',
    templateUrl: './page-list.component.html',
    styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
    recordsAgency: any[] = [
        { id: 1, agency: 'Ambato', address: 'Calle A' },
        { id: 2, agency: 'Quito', address: 'Calle B' },
        { id: 3, agency: 'Riobamba', address: 'Calle C' },
        { id: 4, agency: 'Guayaquil', address: 'Calle D' },
        { id: 5, agency: 'Machala', address: 'Calle E' },
        { id: 1, agency: 'Ambato', address: 'Calle A' },
        { id: 2, agency: 'Quito', address: 'Calle B' },
        { id: 3, agency: 'Riobamba', address: 'Calle C' },
        { id: 4, agency: 'Guayaquil', address: 'Calle D' },
        { id: 5, agency: 'Machala', address: 'Calle E' },
        { id: 1, agency: 'Ambato', address: 'Calle A' },
        { id: 2, agency: 'Quito', address: 'Calle B' },
        { id: 3, agency: 'Riobamba', address: 'Calle C' },
        { id: 4, agency: 'Guayaquil', address: 'Calle D' },
        { id: 5, agency: 'Machala', address: 'Calle E' },
        { id: 1, agency: 'Ambato', address: 'Calle A' },
        { id: 2, agency: 'Quito', address: 'Calle B' },
        { id: 3, agency: 'Riobamba', address: 'Calle C' },
        { id: 4, agency: 'Guayaquil', address: 'Calle D' },
        { id: 5, agency: 'Machala', address: 'Calle E' },
        { id: 1, agency: 'Ambato', address: 'Calle A' },
        { id: 2, agency: 'Quito', address: 'Calle B' },
        { id: 3, agency: 'Riobamba', address: 'Calle C' },
        { id: 4, agency: 'Guayaquil', address: 'Calle D' },
        { id: 5, agency: 'Machala', address: 'Calle E' },
        { id: 1, agency: 'Ambato', address: 'Calle A' },
        { id: 2, agency: 'Quito', address: 'Calle B' },
        { id: 3, agency: 'Riobamba', address: 'Calle C' },
        { id: 4, agency: 'Guayaquil', address: 'Calle D' },
        { id: 5, agency: 'Machala', address: 'Calle E' },
        { id: 1, agency: 'Ambato', address: 'Calle A' },
        { id: 2, agency: 'Quito', address: 'Calle B' },
        { id: 3, agency: 'Riobamba', address: 'Calle C' },
        { id: 4, agency: 'Guayaquil', address: 'Calle D' },
        { id: 5, agency: 'Machala', address: 'Calle E' },
        { id: 1, agency: 'Ambato', address: 'Calle A' },
        { id: 2, agency: 'Quito', address: 'Calle B' },
        { id: 3, agency: 'Riobamba', address: 'Calle C' },
        { id: 4, agency: 'Guayaquil', address: 'Calle D' },
        { id: 5, agency: 'Machala', address: 'Calle E' },
        { id: 1, agency: 'Ambato', address: 'Calle A' },
        { id: 2, agency: 'Quito', address: 'Calle B' },
        { id: 3, agency: 'Riobamba', address: 'Calle C' },
        { id: 4, agency: 'Guayaquil', address: 'Calle D' },
        { id: 5, agency: 'Machala', address: 'Calle E' },
        { id: 1, agency: 'Ambato', address: 'Calle A' },
        { id: 2, agency: 'Quito', address: 'Calle B' },
        { id: 3, agency: 'Riobamba', address: 'Calle C' },
        { id: 4, agency: 'Guayaquil', address: 'Calle D' },
        { id: 5, agency: 'Machala', address: 'Calle E' },
        { id: 1, agency: 'Ambato', address: 'Calle A' },
        { id: 2, agency: 'Quito', address: 'Calle B' },
        { id: 3, agency: 'Riobamba', address: 'Calle C' },
        { id: 4, agency: 'Guayaquil', address: 'Calle D' },
        { id: 5, agency: 'Machala', address: 'Calle E' },
    ];

    //columns: string[] = ['id', 'agency', 'address'];
    //
    metaDataColumns: MetaDataColumn[] = [
        { field: 'id', title: 'ID' },
        { field: 'agency', title: 'AGENCIA' },
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
        private bottomSheet: MatBottomSheet
    ) {
        this.changePage(0);
    }

    ngOnInit(): void {}

    data: any[] = [];
    totalRecords = this.recordsAgency.length;

    changePage(page: number) {
        const pageSize = environment.PAGE_SIZE;
        const skip = pageSize * page;
        this.data = this.recordsAgency.slice(skip, skip + pageSize);
    }

    openForm(row: any) {}

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
}

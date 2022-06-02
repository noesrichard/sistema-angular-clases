import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTable, MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import {
    PerfectScrollbarConfigInterface,
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { KeypadButtonComponent } from './components/keypad-button/keypad-button.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { DownloadComponent } from './components/download/download.component';
import {MatListModule} from '@angular/material/list';
import { MatTableExporterModule } from 'mat-table-exporter';
import {CustomPaginator} from './components/paginator/paginator.config';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
};

@NgModule({
    declarations: [
        TitleComponent,
        ContainerComponent,
        TableComponent,
        PaginatorComponent,
        ConfirmComponent,
        KeypadButtonComponent,
        DownloadComponent,
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatTooltipModule,
        MatIconModule,
        MatCardModule,
        MatTableModule,
        FlexLayoutModule,
        MatPaginatorModule,
        MatDialogModule,
        MatButtonModule,
        MatSnackBarModule,
        MatBottomSheetModule,
        MatListModule,
        MatTableExporterModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        TitleComponent,
        ContainerComponent,
        TableComponent,
        PerfectScrollbarModule,
        PaginatorComponent,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatTable,
        MatTableModule,
        ConfirmComponent,
        MatDialogModule,
        MatSnackBarModule,
        KeypadButtonComponent,
        MatBottomSheetModule,
        DownloadComponent,
        MatToolbarModule,
        MatFormFieldModule,
        FlexLayoutModule,
        MatInputModule,
    ],

    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        { 
            provide: MatPaginatorIntl, 
            useValue: CustomPaginator()
        }
    ],
})
export class SharedModule {}

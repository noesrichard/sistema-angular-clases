import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { MetaDataColumn } from '../../interfaz/metacolumn.interface';

export interface product {
    id: number;
    name: string;
    brand: string;
    color: string;
    price: number;
}

@Component({
    selector: 'qr-download',
    templateUrl: './download.component.html',
    styleUrls: ['./download.component.css'],
})
export class DownloadComponent implements OnInit {
    constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}

    ngOnInit(): void {}

    setColumns(): any[] {
        let columns: any[] = [];
        let headers: MetaDataColumn[] = this.data.headers;
        headers.forEach((e) => {
            columns.push({
                header: e.title,
                key: e.field,
            });
        });
        console.log(columns)
        return columns;
    }

    exportarExcel() {
        let workbook = new Workbook();
        let worksheet = workbook.addWorksheet('ProductSheet');

        let rows: any[] = this.data.rows;

        worksheet.columns = this.setColumns(); 

        rows.forEach((e) => {
            worksheet.addRow(e, 'n');
        });

        workbook.xlsx.writeBuffer().then((rows) => {
            let blob = new Blob([rows], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            });
            fs.saveAs(blob, 'ProductData.xlsx');
        });
    }

    exportarPDF() {}
}

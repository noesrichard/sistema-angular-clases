import {
    Component,
    ContentChild,
    ContentChildren,
    Input,
    OnInit,
    QueryList,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataColumn } from '../../interfaz/metacolumn.interface';

interface IData {
    id: number;
    agency: string;
}
@Component({
    selector: 'qr-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
    @Input() data: any;
    @Input() metaDataColumns!: MetaDataColumn[];

    @ContentChildren(MatColumnDef, { descendants: true })
    columnsDef!: QueryList<MatColumnDef>;
    @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

    columns: string[] = [];

    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['metaDataColumns']) {
            this.columns = this.metaDataColumns.map((data) => data.field);
            console.log(changes);
        }
    }
    ngAfterContentInit() {
        if (!this.columnsDef) {
            return;
        }
        this.columnsDef.forEach((columnDef) => {
            this.columns.push(columnDef.name);
            this.table.addColumnDef(columnDef);
        });
    }
}

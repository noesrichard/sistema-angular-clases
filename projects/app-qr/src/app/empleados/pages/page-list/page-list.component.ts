import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaz/metacolumn.interface';

@Component({
    selector: 'qr-page-list',
    templateUrl: './page-list.component.html',
    styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
    data: any[] = [
        {
            cedula: 1,
            nombre: 'Richard',
            apellido: 'Carrion',
            cargo: 'Ingeniero',
            email: 'a@hotmail.com',
        },
        {
            cedula: 2,
            nombre: 'Kevin',
            apellido: 'Alvear',
            cargo: 'Ingeniero',
            email: 'b@hotmail.com',
        },
        {
            cedula: 3,
            nombre: 'Kevin',
            apellido: 'Suarez',
            cargo: 'Ingeniero',
            email: 'c@hotmail.com',
        },
        {
            cedula: 4,
            nombre: 'Jose',
            apellido: 'Pazmi',
            cargo: 'Ingeniero',
            email: 'd@hotmail.com',
        },
        {
            cedula: 5,
            nombre: 'Luis',
            apellido: 'Zerna',
            cargo: 'Ingeniero',
            email: 'e@hotmail.com',
        },
    ];

    metaDataColumns: MetaDataColumn[] = [
        { field: 'cedula', title: 'CEDULA' },
        { field: 'nombre', title: 'NOMBRE' },
        { field: 'apellido', title: 'APELLIDO' },
        { field: 'cargo', title: 'CARGO' },
        { field: 'email', title: 'EMAIL' },
    ];

    constructor() {}

    ngOnInit(): void {}
}

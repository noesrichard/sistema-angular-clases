import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaz/metacolumn.interface';

@Component({
  selector: 'qr-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

    data: any[] = [
        { cedula: 1, nombre: 'Richard', apellido:'Carrion' , birthdate: '19/02/2001', number: '981212', email:'a@hotmail.com'},
        { cedula: 2, nombre: 'Kevin', apellido:'Alvear' , birthdate: '19/02/2001', number: '981212', email:'b@hotmail.com'},
        { cedula: 3, nombre: 'Kevin', apellido:'Suarez' , birthdate: '19/02/2001', number: '981212', email:'c@hotmail.com'},
        { cedula: 4, nombre: 'Alex', apellido:'Tigselema' , birthdate: '19/02/2001', number: '981212', email:'d@hotmail.com'},
        { cedula: 5, nombre: 'Jose', apellido:'Pazmi E' , birthdate: '19/02/2001', number: '981212', email:'e@hotmail.com'},
    ];


    metaDataColumns: MetaDataColumn[] = [
        { field: 'cedula', title: 'CEDULA' }, 
        { field: 'nombre', title: 'NOMBRE' }, 
        { field: 'apellido', title: 'APELLIDO' }, 
        { field: 'birthdate', title: 'FECHA DE NACIMIENTO' }, 
        { field: 'number', title: 'NUMERO' }, 
        { field: 'email', title: 'EMAIL' }, 
    ];
  constructor() { }

  ngOnInit(): void {
  }

}

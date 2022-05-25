import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaz/metacolumn.interface';

@Component({
  selector: 'qr-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

    data: any[] = [
        {id: '1', canal: 'Canal1', descripcion: 'Descripcion 1'},
        {id: '2', canal: 'Canal2', descripcion: 'Descripcion 2'},
        {id: '3', canal: 'Canal3', descripcion: 'Descripcion 3'},
        {id: '4', canal: 'Canal4', descripcion: 'Descripcion 4'},
        {id: '5', canal: 'Canal5', descripcion: 'Descripcion 5'},
    ];

    columns: string[] = ['id', 'canal', 'descripcion'];
    metaDataColumns: MetaDataColumn[] = [
        { field: 'id', title: 'ID' }, 
        { field: 'canal', title: 'CANAL' }, 
        { field: 'descripcion', title: 'DESCRIPCION' }, 
    ];

  constructor() { }

  ngOnInit(): void {
  }

}

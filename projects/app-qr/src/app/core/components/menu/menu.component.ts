import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {IMenu, MenuService} from '../../../services/menu.service';

@Component({
    selector: 'qr-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
    @Output() onToggleExpanded: EventEmitter<boolean> = new EventEmitter<boolean>() 
    url = '';
    expanded = true;
    listMenu: IMenu[];

    constructor(private menuService: MenuService) {
        this.listMenu = menuService.getMenu(); 
    }

    ngOnInit(): void {}

    toggleExpaned() {
        this.expanded = !this.expanded; 
        this.onToggleExpanded.emit(this.expanded);
    }
}

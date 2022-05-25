import { Injectable } from '@angular/core';

export interface IMenu {
    title: string;
    url: string;
    icon: string;
}

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    private listMenu: IMenu[] = [
        {
            title: 'Agencias',
            url: '/agencias',
            icon: '/assets/icons/agency.svg',
        },
        {
            title: 'Canales',
            url: '/canales',
           icon: '/assets/icons/channel.svg',
        },
        {
            title: 'Clientes',
            url: '/clientes',
            icon: '/assets/icons/client.svg',
        },
        {
            title: 'Empleados',
            url: '/empleados',
            icon: '/assets/icons/employee.svg',
        },
        {
            title: 'Quejas y Reclamos',
            url: '/qr',
            icon: '/assets/icons/complains.svg',
        },
        {
            title: 'Seguimiento',
            url: '/seguimiento',
            icon: '/assets/icons/following.svg',
        },
    ];

    constructor() {}

    getMenu(): IMenu[] {
        return [...this.listMenu];
    }

    getMenuByUrl(url: string): IMenu {
        return this.listMenu.find(
            (menu) => menu.url.toLowerCase() === url.toLowerCase()
        ) as IMenu;
    }
}

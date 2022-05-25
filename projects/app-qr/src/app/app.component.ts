import { Component } from '@angular/core';

@Component({
    selector: 'qr-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    expanded = true;
    title = 'appQR';

    toggleExpaned(expanded:boolean){ 
        this.expanded = expanded; 
    }
}

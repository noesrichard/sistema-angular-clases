import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    hidePassword = true; 

    constructor() { }

    ngOnInit(): void {
    }

}

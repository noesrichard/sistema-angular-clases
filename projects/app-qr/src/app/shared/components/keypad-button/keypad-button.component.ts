import { Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {KeypadButton} from '../interfaces/keypadbutton';

@Component({
  selector: 'qr-keypad-button',
  templateUrl: './keypad-button.component.html',
  styleUrls: ['./keypad-button.component.css']
})
export class KeypadButtonComponent implements OnInit {

    @Input() keypadButton: KeypadButton[] = []; 
    @Output() onClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  doAction(action: string){ 
        this.onClick.emit(action);
  }

}

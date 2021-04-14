import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sva-button',
  templateUrl: './sva-button.component.html',
  styleUrls: ['./sva-button.component.scss']
})
export class SvaButtonComponent implements OnInit {

  // Parameters
  @Input() disabled: boolean;
  @Input() type: string; // reset, submit, button
  @Input() role: string; // primary, secondary, tertiary.
  @Input() icon: string;

  @Output() Click: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
     // Initialize Default Properties
     this.type = 'button'; // reset, submit, button
     this.role = 'primary'; // primary, secondary, tertiary, custom
     this.disabled = false;
     this.icon = '';
   }

   clickBtn(button: any): void{
    this.Click.emit(button);
  }
  ngOnInit(): void{
    console.log(this.role);
  }
}

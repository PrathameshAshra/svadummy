import { TemplateRef, ViewChild } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

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

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onActionClick: EventEmitter<any> = new EventEmitter();

  constructor() {
     // Initialize Default Properties
     this.type = 'button'; // reset, submit, button
     this.role = 'primary'; // primary, secondary, tertiary, custom
     this.disabled = false;
     this.icon = '';
   }

   clickBtn(button: any) {
    this.onClick.emit(button);
  }

  actionClick(button: any) {
      this.onActionClick.emit(button);
  }
  test() {
    console.log('enter');
  }

  ngOnInit() {
  }
}

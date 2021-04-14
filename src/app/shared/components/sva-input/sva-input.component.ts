import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITextConfig } from './sva-input.model';

@Component({
  selector: 'sva-input',
  templateUrl: './sva-input.component.html',
  styleUrls: ['./sva-input.component.scss']
})
export class SvaInputComponent implements OnInit {
  @Input()
  label!: string;
  @Output() DataModel: EventEmitter<any> = new EventEmitter();

  constructor() {

  }
  ngOnInit(): void{
  }
}

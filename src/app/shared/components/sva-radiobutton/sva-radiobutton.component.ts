import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sva-radiobutton',
  templateUrl: './sva-radiobutton.component.html',
  styleUrls: ['./sva-radiobutton.component.scss']
})
export class SvaRadiobuttonComponent implements OnInit {
  @Output()
  selectedValue = new EventEmitter<any>();
  @Input()
  radioButtonArray!: Array<any>;
  selectedItem: any;
  constructor() {

  }

  onSelectionChange(): void{
    this.selectedValue.emit(this.selectedItem);
  }
  ngOnInit(): void{
  }

}

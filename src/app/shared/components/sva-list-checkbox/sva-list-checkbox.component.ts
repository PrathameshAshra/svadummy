import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatListOptionCheckboxPosition } from '@angular/material/list';
import { SvaCheckboxListModel, SvaCheckboxModel } from './sva-list-checkbox.model';

@Component({
  selector: 'app-sva-list-checkbox',
  templateUrl: './sva-list-checkbox.component.html',
  styleUrls: ['./sva-list-checkbox.component.scss']
})
export class SvaListCheckboxComponent implements OnInit {
 @Input() SplitView?: boolean;
 @Input() positioning!: MatListOptionCheckboxPosition;
 @Input() listOfCheckbox!: Array<SvaCheckboxModel> ;
 @Output() selectedItems = new EventEmitter<any>();
 SelectedData: any;
  constructor() {
   }
  onNgModelChange(event: any): any{
    console.log(this.selectedItems = event);
  }
  ngOnInit(): void {
    console.log(this.SplitView)
  }

}

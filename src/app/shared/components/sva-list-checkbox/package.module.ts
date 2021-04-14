import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../shared-modules/material-module';
import { SvaListCheckboxComponent } from './sva-list-checkbox.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [SvaListCheckboxComponent],
  exports: [SvaListCheckboxComponent ],
})
export class SVAListCheckboxModule {}

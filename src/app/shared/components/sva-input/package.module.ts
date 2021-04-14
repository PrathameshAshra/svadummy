import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../shared-modules/material-module';
import { SvaInputComponent } from './sva-input.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [SvaInputComponent],
  exports: [SvaInputComponent ],
})
export class SVAInputModule {}

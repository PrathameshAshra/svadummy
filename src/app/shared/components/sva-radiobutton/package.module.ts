import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../shared-modules/material-module';
import { SvaRadiobuttonComponent } from './sva-radiobutton.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [SvaRadiobuttonComponent],
  exports: [SvaRadiobuttonComponent ],
})
export class SVARadioButtonModule {}

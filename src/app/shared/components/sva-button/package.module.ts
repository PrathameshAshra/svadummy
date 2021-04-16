import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../shared-modules/material-module';
import { SvaButtonComponent } from './sva-button.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [SvaButtonComponent],
  exports: [SvaButtonComponent ],
})
export class SVAButtonModule {}

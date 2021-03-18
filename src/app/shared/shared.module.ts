import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [SharedComponent,  ]
  ,
  exports:  [ SharedComponent,   FormsModule, MatCheckboxModule,
    MatButtonModule]
})
export class SharedModule { }

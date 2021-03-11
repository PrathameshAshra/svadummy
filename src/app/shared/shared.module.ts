import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { CarouselComponent  } from './carousel/carousel.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [SharedComponent, CarouselComponent,  ]
  ,
  exports:  [ SharedComponent, CarouselComponent,  MatRadioModule,   FormsModule, MatCheckboxModule,
    MatButtonModule]
})
export class SharedModule { }

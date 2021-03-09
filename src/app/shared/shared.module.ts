import { CarouselItemDirective } from './../directives/carousel-item.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { CarouselComponent  } from './carousel/carousel.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [SharedComponent, CarouselComponent, CarouselItemDirective, ]
  ,
  exports:  [ SharedComponent, CarouselComponent, CarouselItemDirective, MatButtonModule]
})
export class SharedModule { }

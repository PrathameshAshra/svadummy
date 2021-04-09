import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidComponent } from './covid.component';
import { CovidRoutes } from './covid.routing';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    CovidRoutes,
    CommonModule,
    MatRadioModule
  ],
  declarations: [CovidComponent]
})
export class CovidModule { }

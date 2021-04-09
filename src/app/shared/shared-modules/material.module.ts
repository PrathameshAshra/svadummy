import { NgModule } from '@angular/core';

import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  exports: [
    MatBadgeModule,
    MatButtonModule
  ]
})
export class MaterialModule {}



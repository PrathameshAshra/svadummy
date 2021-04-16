import { AuthInterceptor } from './../config/http_interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [SharedComponent ]
  ,
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  exports:  [ SharedComponent,   FormsModule, MatCheckboxModule,
    MatButtonModule]
})
export class SharedModule { }

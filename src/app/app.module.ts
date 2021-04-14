import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmptyComponent } from './core/layout/empty-layout/empty..component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './core/layout/auth-layout/auth..component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

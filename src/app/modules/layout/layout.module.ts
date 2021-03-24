import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingRoutes } from './layout-routing.routing';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingRoutes,
  ],
  declarations: [LayoutComponent, DashboardComponent]
})
export class LayoutModule { }

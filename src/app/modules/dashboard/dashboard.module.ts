import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { CovidComponent } from '../assesment/covid/covid.component';
import { AuthComponent } from 'src/app/core/layout/auth-layout/auth..component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent },
      {
        path: 'covid', component: CovidComponent,
      }
    ]),
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}

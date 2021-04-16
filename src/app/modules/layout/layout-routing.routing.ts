import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { CovidModule } from '../screening/covid.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', component: DashboardComponent
      }
    ],
  },
  {
    path: 'covid',
    loadChildren: () => import('../screening/covid.module').then(m => m.CovidModule)
  }

];

export const LayoutRoutingRoutes = RouterModule.forChild(routes);

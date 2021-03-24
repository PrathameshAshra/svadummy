import { RouterModule, Routes } from '@angular/router';

import { CovidComponent } from './covid.component';


const routes: Routes = [
  { path: '', component: CovidComponent, },

  {  },
];

export const CovidRoutes = RouterModule.forChild(routes);

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/layout/auth-layout/auth..component';
import { EmptyComponent } from './core/layout/empty-layout/empty..component';

const routes: Routes = [
  {
    path: '', component: EmptyComponent,
    loadChildren: () => import('./modules/onboarding/onboarding.module').then(m => m.OnboardingModule)
  },
  {
    path: 'app', component: AuthComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

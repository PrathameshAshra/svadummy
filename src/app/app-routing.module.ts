import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './config/auth.guard';

const routes: Routes = [
{
  path: 'unauth',
  loadChildren: () => import('./modules/onboarding/onboarding.module').then(m => m.OnboardingModule)
},
{
  path: 'auth',
  loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule),
  canActivate: [AuthGuard]
},
{
  path: '',
  redirectTo: 'auth',
  pathMatch: 'full'
},
{
  path: '**', redirectTo: 'auth'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

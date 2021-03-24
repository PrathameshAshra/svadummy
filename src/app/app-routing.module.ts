import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'unauth',
  loadChildren: () => import('./modules/onboarding/onboarding.module').then(m => m.OnboardingModule)
},
{
  path: 'auth',
  loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule)
}, {
  path: '**', redirectTo: 'unauth'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

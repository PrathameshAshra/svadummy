import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';

const routes: Routes = [
  { path: '', component: OnboardingComponent },
];

export const OnboardingRoutes = RouterModule.forChild(routes);

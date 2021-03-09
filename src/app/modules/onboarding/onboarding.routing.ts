import { SpashComponent } from './views/spash/spash.component';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';

const routes: Routes = [
  { path: '', component: SpashComponent },
];

export const OnboardingRoutes = RouterModule.forChild(routes);

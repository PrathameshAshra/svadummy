import { PhoneLoginComponent } from './views/phone-number/phone-number.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { SpashComponent } from './views/spash/spash.component';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';


const routes: Routes = [
  { path: '', component: SpashComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {  },
];

export const OnboardingRoutes = RouterModule.forChild(routes);

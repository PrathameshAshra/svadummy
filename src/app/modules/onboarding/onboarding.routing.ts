import { PhoneLoginComponent } from './views/phone-number/phone-number.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { SpashComponent } from './views/spash/spash.component';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';
import { FollowupLoginComponent } from './views/followup-login/followup-login.component';


const routes: Routes = [
  { path: '', component: SpashComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'mobile-verification', component: SignupComponent, data : {typeOfOTP : 'mobile'}},
  { path: 'email-verification', component: SignupComponent , data : {typeOfOTP : 'email'}},
  { path: 'otp-verification', component: PhoneLoginComponent },
  { path: 'onboarding', component: FollowupLoginComponent },
  {  },
];

export const OnboardingRoutes = RouterModule.forChild(routes);

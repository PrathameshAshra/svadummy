import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { OnboardingRoutes } from './onboarding.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OnboardingRoutes
  ],
  declarations: [OnboardingComponent]
})
export class OnboardingModule { }

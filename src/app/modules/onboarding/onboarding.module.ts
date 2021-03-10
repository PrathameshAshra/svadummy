import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OnboardingRoutes } from './onboarding.routing';
import { SpashComponent } from './views/spash/spash.component';
import { SwiperModule } from 'swiper/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './views/signup/signup.component';
import { PhoneLoginComponent } from './views/phone-number/phone-number.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    CommonModule,
    SharedModule,
    OnboardingRoutes,
    SwiperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

  ],
  declarations: [OnboardingComponent, SpashComponent, LoginComponent, SignupComponent,PhoneLoginComponent]
})
export class OnboardingModule { }
 
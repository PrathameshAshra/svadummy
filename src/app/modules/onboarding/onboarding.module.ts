import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingRoutes } from './onboarding.routing';
import { SpashComponent } from './views/spash/spash.component';
import { SwiperModule } from 'swiper/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SignupComponent } from './views/signup/signup.component';
import { PhoneLoginComponent } from './views/phone-number/phone-number.component';
import { FollowupLoginComponent } from './views/followup-login/followup-login.component';
import { SVAsaperatorModule } from 'src/app/shared/components/sva-saperator/package.module';

import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatListModule } from '@angular/material/list';
import { SVAButtonModule } from 'src/app/shared/components/sva-button/package.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    CommonModule,
    HttpClientModule,
    OnboardingRoutes,
    SVAButtonModule,
    SVAsaperatorModule,
  ],
  declarations: [
    OnboardingComponent,
    SpashComponent,
    LoginComponent,
    SignupComponent,
    PhoneLoginComponent,
    FollowupLoginComponent,
  ],
})
export class OnboardingModule {}

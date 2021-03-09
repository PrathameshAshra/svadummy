import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  imports: [
    CarouselModule,
    CommonModule,
    SharedModule,
    OnboardingRoutes,
    SwiperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [OnboardingComponent, SpashComponent, LoginComponent]
})
export class OnboardingModule { }

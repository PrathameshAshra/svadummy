import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OnboardingRoutes } from './onboarding.routing';
import { SpashComponent } from './views/spash/spash.component';
import { SwiperModule } from 'swiper/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CarouselModule,
    CommonModule,
    SharedModule,
    OnboardingRoutes,
    SwiperModule, 
  ],
  declarations: [OnboardingComponent, SpashComponent]
})
export class OnboardingModule { }

import { Component, OnInit } from '@angular/core';
import SwiperCore from 'swiper/core';



@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  constructor() { }
  onSwiper(swiper: any): void {
    console.log(swiper);
  }

  onSlideChange(): void {
    console.log('slide change');
  }
  ngOnInit(): void {
  }

}

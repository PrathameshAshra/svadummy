import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselConfig } from 'src/app/config/carousel.config';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  customOptions: OwlOptions = CarouselConfig;
  CurrentPage = 'url(\'./../../../../assets/svg/landing-0.svg';
  constructor() { }
  onChangeCard(ev: any): any{
    console.log(ev);

    if(ev.startPosition === 4){

      this.customOptions.nav = false
      this.customOptions.dots = false

      console.log(this.customOptions)
    }
    this.CurrentPage = 'url(\'./../../../../assets/svg/landing-' + ev.startPosition + '.svg' ;
    // this.CurrentPage = 'url('./../../../../assets/svg/landing-4.svg');' + ev.startPosition;
  }
  ngOnInit(): void{
  }

}

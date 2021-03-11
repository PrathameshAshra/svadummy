import { Component, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-followup-login',
  templateUrl: './followup-login.component.html',
  styleUrls: ['./followup-login.component.scss']
})
export class FollowupLoginComponent implements OnInit {
  lengthOfCarousel = 4;
  activeSlides: SlidesOutputData = new SlidesOutputData();
  slidesStore: any[] = [];
  currentPosition = 0;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 400,
    navText: ['<img src=\'../../../../../assets/svg/DefaultPreviousButton.svg\'>', '<img src=\'../../../../../assets/svg/DefaultNextButton.svg\'>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      }
    },
    nav: true,
  };


displayTinyPrevNotation : boolean | undefined;
displayTinyNextNotation : boolean | undefined ;
  constructor() { }

  changeCustomDots(): void{
    console.log('something');
  }

  nextEvent(ev: Event): void{
    console.log(ev);
  }
  getPassedData(data: SlidesOutputData): void {

  }
  ngOnInit(): void {
  }

  }

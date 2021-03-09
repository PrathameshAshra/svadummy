import { AnimationStyleMetadata, style } from '@angular/animations';
import { OnInit, Component, Input, ViewChild, ElementRef, asNativeElements, AfterViewInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() slides: any = '';
  styleExp = '';
  @ViewChild('myIdentifier')
  cardWidth = 0;
  myIdentifier: ElementRef<any> = new ElementRef(asNativeElements);
  items = [1, 2, 3,4,5,6,7,8,9,10];
  pusher = 0;
  displayForwardButton = true;
  displayBackButtton = false;
  currentPosition = 0;

  constructor() {
  }
  onPreviousClick(): void {
    this.cardWidth = document.getElementById('myIdentifier')?.offsetWidth || -1;
    this.pusher = this.pusher + this.cardWidth;
    this.currentPosition = this.currentPosition - 1;

    this.RenderScreen(this.pusher);
    console.log(this.pusher)

  }
// tslint:disable-next-line: typedef
RenderScreen(pusherValue: number){
  console.log(pusherValue,this.currentPosition)
  this.styleExp = 'translateX(' + pusherValue + 'px)';

  if(this.currentPosition  > 0 ){
    this.displayBackButtton = true;
    this.displayForwardButton = true;

  }else{
    this.displayBackButtton = false;
    this.displayForwardButton = true;
  }
 if(this.currentPosition == this.items.length -1){
  this.displayForwardButton = false;

 }
 

// // back Button Validations 
//   if(Math.abs(this.pusher)  < this.cardWidth ){
//     this.displayBackButtton = false
//   }else{
//     this.displayBackButtton= true
//   }

  
// //  Next Button validations
//   if(Math.abs(this.pusher)  < this.cardWidth * this.items.length ){
//   this.displayForwardButton = true
// }else{
//   this.displayForwardButton= false
// }
}
  onNextClick(): void {
    this.cardWidth = document.getElementById('myIdentifier')?.offsetWidth || -1;
    this.pusher = this.pusher - this.cardWidth;
    this.currentPosition = this.currentPosition + 1;
    console.log(this.pusher,this.cardWidth)

    this.RenderScreen(this.pusher);
  }
  ngOnInit(): void {
  }

}


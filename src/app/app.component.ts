import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'sva2';


  constructor(){

  }
  // tslint:disable-next-line: typedef
  public get width() {
    return window.innerWidth;
  }

  ngOnInit(): void {
  }
}

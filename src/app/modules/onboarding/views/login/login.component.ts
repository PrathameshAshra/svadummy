import { Component, OnInit } from '@angular/core';

import { ISvaSaperatorConfig } from 'src/app/shared/sva-saperator/sva-saperator.config';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  SvaSaperatorConfig: ISvaSaperatorConfig = {
    content : 'or'
  };
  constructor() { }
  loginWithGoogle(): void {
  
  }
  logout(): void {
  }
  ngOnInit(): void {

  }
}

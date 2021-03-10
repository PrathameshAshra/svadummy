import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { PhoneNumber } from 'src/app/model/user.model';
import {environment } from '../../../../../environments/environment' ;
import firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'phone-login',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneLoginComponent implements OnInit {

  windowRef: any;

  phoneNumber: PhoneNumber  = new PhoneNumber();

  verificationCode: string | undefined;

  user: any;

  constructor(private win: AuthService) { }

  ngOnInit(): void {
    firebase.initializeApp(environment.firebase);

    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    this.windowRef.recaptchaVerifier.render();
  }


  sendLoginCode(): void {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then((result: any) => {

        this.windowRef.confirmationResult = result;

      })
      .catch((error: any) => console.log(error));

  }

  verifyLoginCode(): void {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then((result: { user: any; }) => {

        this.user = result.user;

      })
      .catch((error: any) => console.log(error, 'Incorrect code entered?'));
  }


}

import { AuthService } from './../../../../services/auth.service';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';
import 'firebase/auth';
// import * as firebase from 'firebase';

import { PhoneNumber } from 'src/app/model/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements  AfterContentChecked {
  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string | undefined;
  user: any;
  
  constructor(private win: AuthService) { }

  signUpWithMobile(): void {
  }
  ngAfterContentChecked(): void {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    this.windowRef.recaptchaVerifier.render();

  }
  sendLoginCode(): void {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {

        this.windowRef.confirmationResult = result;

      })
      .catch(error => console.log(error));

  }

  verifyLoginCode(): void {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then((result: { user: any; }) => {

        this.user = result.user;

      })
      .catch((error: any) => { console.log(error, "Incorrect code entered?") });
  }

}

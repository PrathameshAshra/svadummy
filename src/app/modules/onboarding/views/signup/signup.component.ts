import { environment } from './../../../../../environments/environment';
import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { PhoneNumber, User } from 'src/app/model/user.model';

// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/dataSharing.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements   OnInit{
  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string | undefined;
  user: any;
  TypeOfView: any;
  UserModel: User = new User();
  sub: any;
  constructor(
    private win: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private dataSharingService: DataSharingService
) { }

 // Shoot SMS
 sendLoginCode(): void {
  const appVerifier = this.windowRef.recaptchaVerifier;
  const num = this.UserModel.PhoneNumber;
  firebase.auth().signInWithPhoneNumber(num, appVerifier)
    .then(result => {
      this.windowRef.confirmationResult = result;
      this.dataSharingService.setData( [this.windowRef, this.UserModel.PhoneNumber]);
      this.router.navigateByUrl('otp-verification');
      // this.dataSharingService.setData(this.windowRef.confirmationResult);
      // this.router.navigateByUrl('otp-verification');
    })
    .catch(error => console.log(error));
}



createUser(): any{
  return firebase.auth().createUserWithEmailAndPassword(this.UserModel.email, this.UserModel.password);


}
  ngOnInit(): void {
// initialize firebase setup
firebase.initializeApp(environment.firebase);

if (!firebase.apps.length) {
  firebase.initializeApp({});
}else {
  firebase.app(); // if already initialized, use that one
}


// tslint:disable-next-line: deprecation
this.sub = this.route.data.subscribe((v) => {
      this.TypeOfView = v; console.log(v);
    });

    // if (this.TypeOfView === 'mobile'){


    // }


  //  Default Firebase setting
this.windowRef = this.win.windowRef;
this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
this.windowRef.recaptchaVerifier.render();


  }
}



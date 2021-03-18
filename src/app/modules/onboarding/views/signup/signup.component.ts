import { environment } from './../../../../../environments/environment';
import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { PhoneNumber, User } from 'src/app/model/user.model';

// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/dataSharing.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ AuthService ]
})
export class SignupComponent implements OnInit {
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
    private dataSharingService: DataSharingService,
    private afAuth: AngularFireAuth
  ) { }

  // Shoot SMS
  sendLoginCode(): void {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.UserModel.PhoneNumber;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;
        this.dataSharingService.setData([this.windowRef, this.UserModel.PhoneNumber]);
        this.router.navigateByUrl('otp-verification');
        // this.dataSharingService.setData(this.windowRef.confirmationResult);
        // this.router.navigateByUrl('otp-verification');
      })
      .catch(error => console.log(error));
  }



  createUser(): any {
    return firebase.auth().createUserWithEmailAndPassword(this.UserModel.email, this.UserModel.password);
  }
  sendEmailVerification(): void {
    // const code = this.route.snapshot.queryParams['oobCode'];

    // this.afAuth.auth
    //   .applyActionCode(code)
    //   .then(() => {
    //     // do something after successful verification
    //   })
    //   .catch(err => {
    //     // show error message
    //   });

  }
  passwordReset(): void {
    // const email = this.frmPasswordReset.controls['email'].value;

    
    // this.afAuth.auth.sendPasswordResetEmail(email).then(
    //   () => {
    //     // success, show some message
    //   },
    //   err => {
    //     // handle errors
    //   }
    // );
  }

  ngOnInit(): void {
    console.log(firebase.app.length)
    // tslint:disable-next-line: deprecation
    this.sub = this.route.data.subscribe((v) => {
      this.TypeOfView = v; console.log(v);
    });

    //  Default Firebase setting
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();


  }
}



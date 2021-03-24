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
  styleUrls: ['./signup.component.scss'],
  providers: [AuthService]
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
  ) { }

  // Shoot SMS
  sendLoginCode(): void {

  }



  createUser(): any {
  }
  sendEmailVerification(): void {


  }
  passwordReset(): void {

  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.sub = this.route.data.subscribe((v) => {
      this.TypeOfView = v; console.log(v);
    });



  }
}



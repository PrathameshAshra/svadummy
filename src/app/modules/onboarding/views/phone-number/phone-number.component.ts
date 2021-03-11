import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { PhoneNumber } from 'src/app/model/user.model';
import {environment } from '../../../../../environments/environment' ;
import firebase from 'firebase/app';
import 'firebase/auth';
import { DataSharingService } from 'src/app/services/dataSharing.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'phone-login',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneLoginComponent implements OnInit {

  windowRef: any;
  itemToVerify: any;
  phoneNumber: PhoneNumber  = new PhoneNumber();

  verificationCode: string | undefined;

  user: any;

  constructor(private win: AuthService, private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.dataSharingService.currentData.subscribe((data: any) => {
      console.log(data);
      this.windowRef = data[0];
      this.itemToVerify = data[1];
    });

  }

// Verify OTP
verifyLoginCode(): void {
  this.windowRef.confirmationResult
    .confirm(this.verificationCode)
    .then((result: { user: any; }) => {
      this.user = result.user;
    })
    .catch((error: any) => { console.log(error, 'Incorrect code entered?'); });
}
}

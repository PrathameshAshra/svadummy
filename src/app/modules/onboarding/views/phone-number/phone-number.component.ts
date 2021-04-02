import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
// import { PhoneNumber } from 'src/app/model/user.model';
import { environment } from '../../../../../environments/environment';
import firebase from 'firebase/app';
import 'firebase/auth';
import { localStorageService } from 'src/app/services/localstorage.service';
import { ToastrService } from 'ngx-toastr';

const OTPEXIPRYTIME = 300;
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'phone-login',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneLoginComponent implements OnInit {
  mobileNumber = '';
  windowRef: any;
  itemToVerify: any;
  secondsLeft: any;
  // phoneNumber: PhoneNumber  = new PhoneNumber();

  verificationCode = '';

  user: any;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
    private localService: localStorageService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(params => {
      this.mobileNumber = params.id;
    });
    this.generateOTP();
  }

  expireCode(): void {
    const t = setInterval((x: any) => {
      this.secondsLeft = this.secondsLeft - 1;
      if (this.secondsLeft === 0) {
        clearInterval(t);
        this.toastr.error('OTP Expired, try resending it');
      }
    }, 1000);

  }
  generateOTP(): void {
    this.secondsLeft = OTPEXIPRYTIME;
    this.authService.generateOtp(this.mobileNumber).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.status === 'success') {
          this.toastr.success('Check your device for OTP');
        }
        this.expireCode();
      }
    });
  }
  // Verify OTP
  verifyLoginCode(): void {
    // tslint:disable-next-line: deprecation
    this.authService.validateOtp(this.mobileNumber, this.verificationCode).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.status === 'success'){
          console.log(data.data.authinfo);
          console.log(data.data.user);
          this.localService.setContact(data.data.authinfo.contact);
          this.localService.setToken(data.data.authinfo.token);
          this.localService.setUserId(JSON.stringify(data.data.user));
          this.toastr.success('OTP Verified');
          this.router.navigate(['unauth/onboarding/']);

        }else{
          this.toastr.error('Something went wrong, try resending or after some time');
        }
      }
    });
  }
}

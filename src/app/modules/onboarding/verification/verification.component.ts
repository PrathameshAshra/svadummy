import { LocalService } from './../../../shared/services/localstorage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
const OTPEXIPRYTIME = 300;

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  otp = '';
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '43px',
      height: '56px',
      background: '#F2F2F2'
    }
  };
  mobileNumber = '';
  secondsLeft: any;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private localService: LocalService
  ) { }

  onOtpChange(otp: any): void {
    this.otp = otp;
    console.log(this.otp);
  }
  ngOnInit(): void{
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(params => {
      this.mobileNumber = params.id;
    });
    this.generateOTP();
  }
  generateOTP(): void {
    this.secondsLeft = OTPEXIPRYTIME;
    this.authService.generateOtp(this.mobileNumber).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.status === 'success') {
          // this.toastr.success('Check your device for OTP');
        }
        this.expireCode();
      }
    });
  }
  expireCode(): void {
    const t = setInterval((x: any) => {
      this.secondsLeft = this.secondsLeft - 1;
      if (this.secondsLeft === 0) {
        clearInterval(t);
        // this.toastr.error('OTP Expired, try resending it');
      }
    }, 1000);

  }
  // Verify OTP
  verifyLoginCode(): void {
    // tslint:disable-next-line: deprecation
    this.authService.validateOtp(this.mobileNumber, this.otp).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.status === 'success'){
          console.log(data.data.authinfo);
          console.log(data.data.user);
          this.localService.setContact(data.data.authinfo.contact);
          this.localService.setToken(data.data.authinfo.token);
          this.localService.setUserId(JSON.stringify(data.data.user));
          // this.toastr.success('OTP Verified');
          this.router.navigate(['followup']);

        }else{
          // this.toastr.error('Something went wrong, try resending or after some time');
        }
      }
    });
  }
}

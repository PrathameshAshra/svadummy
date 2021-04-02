import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

import { ISvaSaperatorConfig } from 'src/app/shared/sva-saperator/sva-saperator.config';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  phoneNumber = '';
  SvaSaperatorConfig: ISvaSaperatorConfig = {
    content : 'or'
  };
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private toastr: ToastrService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    ) {
  }
  loginWithGoogle(): void {
  }
  logout(): void {
  }
  // tslint:disable-next-line: typedef
  // authenticateUser(){
  //   // tslint:disable-next-line: deprecation
  //   this.userService.loginUser().subscribe(
  //     data => {
  //       console.log(data);
  //     }
  //   );
  // }
  // tslint:disable-next-line: typedef
  // authenticateOTP(){
  //   // tslint:disable-next-line: deprecation
  //   this.userService.authenticateOTP().subscribe(
  //     data => {
  //       console.log(data);
  //     }
  //   );
  // }
  generateOTP(): void {
    const generateOtp$ =  this.authService.generateOtp(this.phoneNumber.toString()).subscribe({
      next: (result: any) => {
      console.log(result);
      if (result.status === 'error'){
        this.toastr.error('User does not exist');
      }else{
        this.router.navigate(['unauth/otp-verification/' + this.phoneNumber]);
      }
      },
      error: (err: any) => {
        this.toastr.error(err);

      }
    });
    }

  ngOnInit(): void {

  }
}

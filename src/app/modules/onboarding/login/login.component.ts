import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  ITextConfig } from 'src/app/shared/components/sva-input/sva-input.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy   {
  loginInputConfig = {} as  ITextConfig;
  phoneNumber = '';
  generateOtp$?: Subscription;
  loginForm: FormGroup;
  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

  ) {

    this.loginForm = this.formBuilder.group({
      mobile: ['', [Validators.required,  Validators.pattern(this.mobNumberPattern)]],
  });
   }
   generateOTP(): void {
     this.generateOtp$ =  this.authService.generateOtp(this.phoneNumber.toString()).subscribe({
      next: (result: any) => {
      console.log(result);
      if (result.status === 'error'){
      }else{
        this.router.navigate(['verification/' + this.phoneNumber]);
      }
      },
      error: (err: any) => {

      }
    });
    }
    ngOnDestroy(): void{
    this.generateOtp$?.unsubscribe();


  }
  ngOnInit(): void{
  }

}

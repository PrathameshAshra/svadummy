import { UserService } from '../../../../shared/services/user.service';
import { environment } from './../../../../../environments/environment';
import { AuthService } from '../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/model/user.model';

// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from 'src/app/shared/services/dataSharing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  windowRef: any;
  verificationCode: string | undefined;
  user: any;
  TypeOfView: any;
  UserModel: IUser = new IUser();
  sub: any;
  mobileForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataSharingService: DataSharingService,
    private toastr: ToastrService,
    private userService: UserService,
    private authService: AuthService,
    private formBuilder: FormBuilder,

  ) {

    this.mobileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required,  Validators.minLength(10)]],
      email: ['', [ Validators.email]]
  });
   }

  // Shoot SMS
  sendLoginCode(): void {
  }


  onSubmit(): void {
    this.UserModel.first_name = this.mobileForm.value.firstName;
    this.UserModel.last_name = this.mobileForm.value.lastName;
    this.UserModel.contact_number = this.mobileForm.value.mobile;
    this.UserModel.email = this.mobileForm.value.email;
    // tslint:disable-next-line: deprecation
    this.userService.createUser(this.UserModel).subscribe({
      next: (result: any) => {
      console.log(result);
      if (result.status === 'error'){
        this.toastr.error(result.messages[0]);
      }else{
        this.router.navigate(['unauth/otp-verification/' + this.UserModel.contact_number ]);
      }
      },
      error: (err: any) => {
        this.toastr.error(err);

      }
    });
    }


  createUser(): any {
  }
  sendEmailVerification(): void {
  }
  passwordReset(): void {
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.sub = this.route.params.subscribe(params => {
      this.TypeOfView = params.id;
   });
  }
}



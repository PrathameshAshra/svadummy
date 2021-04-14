import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  ITextConfig } from 'src/app/shared/components/sva-input/sva-input.model';
import { IUser } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpLoginComponent implements OnInit {
  UserModel: IUser = new IUser();
  sub: any;
  mobileForm: FormGroup
  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {

    this.mobileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required,  Validators.pattern(this.mobNumberPattern)]],
      email: ['', [ Validators.email]]
  });
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
      if (result.status === 'error' && result.message === "User is already registered"){
        this.router.navigate(['/verification/' + this.UserModel.contact_number ]);

      }else{
        this.router.navigate(['/verification/' + this.UserModel.contact_number ]);
      }
      },
      error: (err: any) => {

      }
    });
    }
  ngOnInit(): void{
    console.log(this.mobileForm.controls['firstName'].dirty)
  }

}

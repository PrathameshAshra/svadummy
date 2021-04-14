import { SVAInputModule } from './../../shared/components/sva-input/package.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplashComponent } from './splash/splash.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SVAButtonModule } from 'src/app/shared/components/sva-button/package.module';
import { MaterialModule } from 'src/app/shared/shared-modules/material-module';
import { SignUpLoginComponent } from './signup/signup.component';
import { VerificationComponent } from './verification/verification.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { RegistrationComponent } from './registration/registration.component';
import { SVAListCheckboxModule } from 'src/app/shared/components/sva-list-checkbox/package.module';
import { SVARadioButtonModule } from 'src/app/shared/components/sva-radiobutton/package.module';



@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        CarouselModule,
        SVAButtonModule,
        MaterialModule,
        SVAListCheckboxModule,
        SVARadioButtonModule,
        NgOtpInputModule,
        RouterModule.forChild([
            {path: '', redirectTo: '/splash', pathMatch: 'full'},
            {path: 'splash', component: SplashComponent},
            {path: 'login', component: LoginComponent},
            {path: 'signup', component: SignUpLoginComponent},
            {path: 'verification/:id', component: VerificationComponent},
            {path: 'followup', component: RegistrationComponent},
        ])
    ],
    declarations: [ SplashComponent , LoginComponent, SignUpLoginComponent, VerificationComponent , RegistrationComponent]
})

export class OnboardingModule {
    constructor(){ }
 }

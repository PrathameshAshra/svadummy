import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/auth';
import { environment } from 'src/environments/environment';
import { IUser } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../config/app,config';
@Injectable({
    providedIn: 'root',
  })
export class AuthService{
apiUrl: string;
ApiConfig: ApiConfig = new ApiConfig();
    constructor(
      private http: HttpClient
    ) {
      this.apiUrl = this.ApiConfig.ApiUrl;
    }

 public generateOtp(mobileNumber: string): any{
   const objOTP = {
    contact_number : mobileNumber
   };
   return this.http.post(this.apiUrl + 'login', objOTP);
    }


  public  validateOtp(mobile: string, otp: string): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl + 'verifyotp', {mobile, otp});
  }

}

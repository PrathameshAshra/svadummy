import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ApiConfig } from 'src/app/config/api.config';
import { IUser } from '../models/user.model';
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

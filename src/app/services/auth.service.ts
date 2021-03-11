import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class AuthService{
  otp: Observable<any> = new Observable();
    get windowRef(): any{
        return window;
    }
    shareOTPtoView(valueFromFirebase: any): Observable<any>{
      return this.otp = valueFromFirebase;
    }
}

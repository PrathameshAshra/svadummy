import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/auth';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root',
  })
  export class AuthService{
    constructor() {
      // firebase.initializeApp(environment.firebase);
  }

  otp: Observable<any> = new Observable();
    get windowRef(): any{
        return window;
    }
    shareOTPtoView(valueFromFirebase: any): Observable<any>{
      return this.otp = valueFromFirebase;
    }
}

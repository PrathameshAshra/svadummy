import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
  export class AuthService{

    get windowRef(): any{
        return window;
    }
}

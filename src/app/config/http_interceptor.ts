import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';

import { Router } from '@angular/router';
import { localStorageService } from '../services/localstorage.service';

@Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(
      private injector: Injector,
      private router: Router,
      private localStoreService: localStorageService
    ) {}

    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      if (req.url.includes('api/login') || req.url.includes('api/verifyotp') || req.url.includes('api/tags'))
      {
        return next.handle(req);
      }
      console.log('Intercepted!', req);
      // tslint:disable-next-line: deprecation

      const token = this.localStoreService.getToken()
      const copiedReq = req.clone({
        headers: req.headers.set(
          'authorization', 'Bearer ' + token
        )
      });

      if (!token) {
        this.router.navigateByUrl('login');
      }

      return next.handle(copiedReq);
    }
  }

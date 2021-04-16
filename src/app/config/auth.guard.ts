// src/app/auth/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { localStorageService } from '../shared/services/localstorage.service';
@Injectable({
    providedIn: 'root',
  })
export class AuthGuard implements CanActivate {
  constructor(public localService: localStorageService, public router: Router) {}
  canActivate(): boolean {
    if (this.localService.getToken()) {
      return true;
    }
    this.router.navigate(['unauth']);
    return false;
  }
}

// src/app/auth/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LocalService } from '../shared/services/localstorage.service';
@Injectable({
    providedIn: 'root',
  })
export class AuthGuard implements CanActivate {
  constructor(public localService: LocalService, public router: Router) {}
  canActivate(): boolean {
    if (this.localService.getToken()) {
      return true;
    }
    this.router.navigate(['unauth']);
    return false;
  }
}

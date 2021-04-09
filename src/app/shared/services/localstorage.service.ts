import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line: class-name
export class localStorageService {
  private data = new BehaviorSubject('');
  currentData = this.data.asObservable();

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem('sva_T', token);
  }
  setUserId(userId: string): void {
    localStorage.setItem('sva_U', userId);

  }
  setContact(contact: string): void {
    localStorage.setItem('sva_C', contact);
  }

  getToken(): any {
    return localStorage.getItem('sva_T');
  }
  getUser(): any {
    return localStorage.getItem('sva_U');
  }
  getContact(): any {
    return localStorage.getItem('sva_C');
  }
  clearAll(): void {
    localStorage.clear();
  }


}


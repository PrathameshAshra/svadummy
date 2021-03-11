import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private data = new BehaviorSubject('');
  currentData = this.data.asObservable();

constructor() { }

// tslint:disable-next-line: typedef
setData(data: any) {
 this.data.next(data);
}
}


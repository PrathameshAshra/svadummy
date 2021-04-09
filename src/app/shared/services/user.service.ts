import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiConfig } from '../../config/app,config';
import { IUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
ApiConfig: ApiConfig = new ApiConfig();
private data = new BehaviorSubject('');
currentData = this.data.asObservable();
apiUrl: string;
constructor(
    private http: HttpClient
) {
    this.apiUrl = this.ApiConfig.ApiUrl;
}



createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'user/signup', user);

}
updateUser(user: any, userId: string): Observable<any> {
    return this.http.put<any>(this.apiUrl + 'user/' + userId , user);

}
}


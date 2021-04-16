import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiConfig } from 'src/app/config/api.config';


@Injectable({
  providedIn: 'root'
})
export class HobbyService {
ApiConfig: ApiConfig = new ApiConfig();
apiUrl: string;

constructor(
    private http: HttpClient
) {
    this.apiUrl = this.ApiConfig.ApiUrl;
}



getDummyHobby(): Observable<any> {
    return this.http.get('./assets/ListOfHobby.json');

}


}


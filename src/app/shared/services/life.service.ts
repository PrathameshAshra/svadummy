import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiConfig } from 'src/app/config/api.config';


@Injectable({
  providedIn: 'root'
})
export class LifeService {
ApiConfig: ApiConfig = new ApiConfig();
apiUrl: string;

constructor(
    private http: HttpClient
) {
    this.apiUrl = this.ApiConfig.ApiUrl;
}



getDummyLife(): Observable<any> {
    return this.http.get('./assets/ListOfLive.json');

}


}


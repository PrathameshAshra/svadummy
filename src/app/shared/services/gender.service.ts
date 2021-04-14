import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { ApiConfig } from 'src/app/config/api.config';


@Injectable({
  providedIn: 'root'
})
export class GenderService {
ApiConfig: ApiConfig = new ApiConfig();
apiUrl: string;

constructor(
    private http: HttpClient
) {
    this.apiUrl = this.ApiConfig.ApiUrl;
}


getDummyGender(): Observable<any> {
    return this.http.get('./assets/ListOfGender.json');

}

}

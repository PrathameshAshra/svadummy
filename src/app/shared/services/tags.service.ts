import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiConfig } from 'src/app/config/api.config';


@Injectable({
  providedIn: 'root'
})
export class TagsService {
ApiConfig: ApiConfig = new ApiConfig();
apiUrl: string;

constructor(
    private http: HttpClient
) {
    this.apiUrl = this.ApiConfig.ApiUrl;
}



getAllTags(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'tags');
}
getAllDummyTags(): Observable<any> {
    return this.http.get('./assets/ListOftags.json');
}


}

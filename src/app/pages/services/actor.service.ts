import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';
import { Observable } from 'rxjs';

@Injectable()
export class ActorService {
  constructor(private http: HttpClient) {}

  getPagedData(data: any): Observable<any> {
    const url = `${AppConstants.API_BASE_URL}actor/page`;
    return this.http.post(url, data);
  }
}

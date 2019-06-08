import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';
import { Observable } from 'rxjs';

@Injectable()
export class FilmService {
  constructor(private http: HttpClient) {}

  getPagedData(data: any): Observable<any> {
    const url = `${AppConstants.API_BASE_URL}film/page`;
    return this.http.post(url, data);
  }

  getLookupData(): Observable<any> {
    const url = `${AppConstants.API_BASE_URL}film/lookup`;
    return this.http.get(url);
  }
}

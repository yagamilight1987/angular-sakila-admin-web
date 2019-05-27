import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';
import { Observable } from 'rxjs';

@Injectable()
export class StoreService {
  constructor(private http: HttpClient) {}

  getStores(): Observable<any> {
    const url = `${AppConstants.API_BASE_URL}store`;
    return this.http.get(url);
  }
}

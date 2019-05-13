import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../../app.constants';
import { LoginModel } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: LoginModel): Observable<any> {
    return this.http.post(`${AppConstants.API_BASE_URL}/login`, data);
  }
}

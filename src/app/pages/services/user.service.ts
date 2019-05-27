import { Injectable } from '@angular/core';
import { SessionStorageService } from 'src/app/services';
import { AppConstants } from 'src/app/app.constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private userData: any;

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) {}

  get email(): string {
    this.getUserData();
    return this.userData.email;
  }

  get id(): number {
    this.getUserData();
    return this.userData.id;
  }

  get token(): string {
    return this.sessionStorageService.get(
      AppConstants.SESSION_STORAGE_KEYS.token
    );
  }

  logout() {
    this.sessionStorageService.clearAll();
  }

  getLoggedInUserDetails(id: number): Observable<any> {
    const url = `${AppConstants.API_BASE_URL}staff/${id}`;
    return this.http.get(url);
  }

  private getUserData(): any {
    if (!this.userData) {
      this.userData = this.sessionStorageService.get(
        AppConstants.SESSION_STORAGE_KEYS.userData
      );
    }
  }
}

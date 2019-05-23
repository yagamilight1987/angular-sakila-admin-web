import { Injectable } from '@angular/core';
import { SessionStorageService } from 'src/app/services';
import { AppConstants } from 'src/app/app.constants';

@Injectable()
export class UserService {
  private userData: any;

  constructor(private sessionStorageService: SessionStorageService) {}

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

  private getUserData(): any {
    if (!this.userData) {
      this.userData = this.sessionStorageService.get(
        AppConstants.SESSION_STORAGE_KEYS.userData
      );
    }
  }
}

import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants';
import { SessionStorageService } from './session-storage.service';

@Injectable()
export class HelperService {
  constructor(private sessionStorageService: SessionStorageService) {}

  get isAuthenticated(): boolean {
    return this.sessionStorageService.get(
      AppConstants.SESSION_STORAGE_KEYS.token
    )
      ? true
      : false;
  }

  get token(): string {
    return this.sessionStorageService.get(
      AppConstants.SESSION_STORAGE_KEYS.token
    );
  }
}

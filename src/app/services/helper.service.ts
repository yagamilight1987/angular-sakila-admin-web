import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class HelperService {
  constructor(private localStorageService: LocalStorageService) {}

  get isAuthenticated(): boolean {
    return this.localStorageService.get(
      AppConstants.SESSION_STORAGE_KEYS.token,
      false
    )
      ? true
      : false;
  }
}

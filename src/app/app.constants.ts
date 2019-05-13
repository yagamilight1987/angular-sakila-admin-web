import { environment } from '../environments/environment';

export class AppConstants {
  static readonly API_BASE_URL: string = environment.apiBaseUrl;
  // If isMock is false nothing is mocked.
  static readonly IS_MOCK: boolean = false;
  // Mock only the following APIs. If this object is empty everything is mocked
  static readonly MOCK_ONLY: any = {};
  static readonly MOCK_PATH: string = 'assets/mock-data/';
  static readonly SESSION_STORAGE_KEYS: any = {
    token: 'TOKEN',
    userData: 'USER_DATA',
    menuData: 'MENU_DATA'
  };
  static readonly APP_NAVIGATION_URLS: any = {
    landing: '/landing',
    login: '/login',
    registration: '/auth/confirm-registration',
    'new-password': '/auth/new-password',
    'dataset-ispot-d': 'landing/dataset/results/iSpot-D'
  };
  static readonly APP_VERSION: string = environment.version;
  static readonly APP_ENV: string = environment.env;
}

export function minlengthValidationMessage(err, field) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err, field) {
  return `This value should be less than ${
    field.templateOptions.maxLength
  } characters`;
}

export function minValidationMessage(err, field) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.max}`;
}

export function noWhitespaceValidationMessage(err, field) {
  return 'This field cannot be left blank.';
}

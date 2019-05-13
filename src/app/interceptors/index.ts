import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auth.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { FakeBackendInterceptor } from './mock.interceptor';
import { AppConstants } from '../app.constants';
import { environment } from '../../environments/environment';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ...(AppConstants.IS_MOCK
    ? [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: FakeBackendInterceptor,
          multi: true
        }
      ]
    : []),
  ...(!environment.production
    ? [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoggingInterceptor,
          multi: true
        }
      ]
    : [])
];

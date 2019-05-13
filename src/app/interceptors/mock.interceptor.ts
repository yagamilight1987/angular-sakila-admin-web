import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { AppConstants } from '../app.constants';
import { Observable } from 'rxjs';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!AppConstants.IS_MOCK) {
      return next.handle(request);
    }
    if (!request.url.startsWith(AppConstants.API_BASE_URL)) {
      return next.handle(request);
    }
    let path = request.url.split('/').pop(); // http://localhost:8081/api/v1/login
    if (!path) {
      return next.handle(request);
    }
    path = path.split('?').shift();
    if (!path) {
      return next.handle(request);
    }
    if (
      Object.keys(AppConstants.MOCK_ONLY).length > 0 &&
      !AppConstants.MOCK_ONLY[path]
    ) {
      // No need to mock these responses
      return next.handle(request);
    }
    const file = `${AppConstants.MOCK_PATH}${path}.json`;
    return next.handle(new HttpRequest('GET', file));
  }
}

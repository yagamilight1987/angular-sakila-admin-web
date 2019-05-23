import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelperService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private helperService: HelperService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.helperService.isAuthenticated
      ? this.helperService.token
      : '';
    if (!accessToken) {
      return next.handle(req);
    }
    // Pass on the cloned request instead of the original request.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
    });
    return next.handle(authReq);
  }
}

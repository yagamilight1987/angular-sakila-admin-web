import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { HelperService, SessionStorageService } from '../services';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  isRefreshingToken: boolean;

  constructor(
    private router: Router,
    private helperService: HelperService,
    private sessionStorageService: SessionStorageService
  ) {
    this.isRefreshingToken = false;
  }

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
    return next.handle(authReq).pipe(
      tap(
        success => success,
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.sessionStorageService.clearAll();
              return this.router.navigate(['/auth/login']);
            }
          }
        }
      )
    );
  }
}

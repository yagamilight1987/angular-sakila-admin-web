import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { HelperService } from '../services/helper.service';
import { AppConstants } from '../app.constants';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGaurd implements CanActivate {
  constructor(private router: Router, private helperService: HelperService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // get the auth for user
    const auth = { loggedIn: this.helperService.isAuthenticated };
    // if not logged in navigate to login page
    if (!auth.loggedIn) {
      // Use ngrx effects
      this.router.navigate([AppConstants.APP_NAVIGATION_URLS.login]);
      return true;
    }
    return auth.loggedIn;
  }
}

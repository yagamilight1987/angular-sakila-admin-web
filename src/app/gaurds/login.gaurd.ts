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
export class LoginGaurd implements CanActivate {
  constructor(private router: Router, private helperService: HelperService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // get the auth for user
    const auth = { loggedIn: this.helperService.isAuthenticated };
    // If user is not logged in
    if (!auth.loggedIn) {
      // if trying to access login page continue
      if (state.url === AppConstants.APP_NAVIGATION_URLS.login) {
        return true;
      }
      // or naviagate to login page
      this.router.navigate([AppConstants.APP_NAVIGATION_URLS.login]);
      return true;
    }
    // If user is logged in and trying to access login page
    if (auth.loggedIn && state.url === AppConstants.APP_NAVIGATION_URLS.login) {
      this.router.navigate([AppConstants.APP_NAVIGATION_URLS.landing]);
      return true;
    }
    return auth.loggedIn;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../../services';
import { AppConstants } from '../../app.constants';
import { LoginModel } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  appEnv: string;
  appVersion: string;
  form: FormGroup;
  model: LoginModel;
  fields: FormlyFieldConfig[];
  errorMessage: string;
  loading: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
  ) {
    this.appEnv = AppConstants.APP_ENV;
    this.appVersion = AppConstants.APP_VERSION;
  }

  ngOnInit() {
    this.loading = false;
    this.form = new FormGroup({});
    this.model = { username: '', password: '' };
    this.fields = [
      {
        key: 'username',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Username',
          placeholder: 'Enter username',
          required: true,
          attributes: {
            autocomplete: 'new-password'
          }
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          type: 'password',
          label: 'Password',
          placeholder: 'Enter password',
          required: true,
          attributes: {
            autocomplete: 'new-password'
          }
        }
      }
    ];
  }

  submit(model: LoginModel) {
    if (this.form.valid) {
      this.loading = true;
      this.authService.login(model).subscribe(
        (result: any) => {
          this.localStorageService.set(
            AppConstants.SESSION_STORAGE_KEYS.token,
            result
          );
          this.loading = false;
          this.router.navigate([AppConstants.APP_NAVIGATION_URLS.landing]);
        },
        (message: any) => {
          this.loading = false;
          if (message != null) {
            // error
            this.errorMessage = message;
            if (this.errorMessage === 'User is not confirmed.') {
              this.router.navigate([
                AppConstants.APP_NAVIGATION_URLS.registration,
                this.model.username
              ]);
            } else if (this.errorMessage === 'User needs to set password.') {
              this.router.navigate([
                AppConstants.APP_NAVIGATION_URLS['new-password']
              ]);
            }
          }
        }
      );
    }
  }
}

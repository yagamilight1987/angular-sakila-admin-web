import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../services/auth.service';
import { SessionStorageService } from '../../services';
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
    private sessionStorageService: SessionStorageService
  ) {
    this.appEnv = AppConstants.APP_ENV;
    this.appVersion = AppConstants.APP_VERSION;
  }

  ngOnInit() {
    this.loading = false;
    this.form = new FormGroup({});
    this.model = { email: '', password: '' };
    this.fields = [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email',
          placeholder: 'Enter email',
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
      this.errorMessage = '';
      this.loading = true;
      this.authService.login(model).subscribe(
        (response: any) => {
          this.sessionStorageService.set(
            AppConstants.SESSION_STORAGE_KEYS.token,
            response.accessToken
          );
          this.sessionStorageService.set(
            AppConstants.SESSION_STORAGE_KEYS.userData,
            {
              expiresIn: response.expiresIn,
              id: response.id,
              email: response.email
            }
          );
          this.loading = false;
          this.router.navigate([AppConstants.APP_NAVIGATION_URLS.landing]);
        },
        (error: any) => {
          this.loading = false;
          this.errorMessage = error.error.message;
        }
      );
    }
  }
}

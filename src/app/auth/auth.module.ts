import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../app.shared.module';
// import { AppFormlyModule } from '../components/app-formly/app-formly.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { ConfirmRegistrationComponent } from './confirm/confirm-registration.component';
// import { ResendCodeComponent } from './resend/resend-code.component';
// import { NewPasswordComponent } from './new-password/new-password.component';
// import { ConfirmForgotNewPasswordComponent } from './confirm-forgot-new-password/confirm-forgot-new-password.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, AppSharedModule
    // , AppFormlyModule
  ],
  declarations: [
    LandingComponent,
    LoginComponent,
    // ForgotPasswordComponent,
    // ConfirmRegistrationComponent,
    // ResendCodeComponent,
    // NewPasswordComponent,
    // ConfirmForgotNewPasswordComponent
  ],
  providers: [AuthService]
})
export class AuthModule {}

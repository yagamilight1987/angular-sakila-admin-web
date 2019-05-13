import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { ConfirmRegistrationComponent } from './confirm/confirm-registration.component';
// import { ResendCodeComponent } from './resend/resend-code.component';
// import { NewPasswordComponent } from './new-password/new-password.component';
// import { ConfirmForgotNewPasswordComponent } from './confirm-forgot-new-password/confirm-forgot-new-password.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      // { path: 'forgot-password', component: ForgotPasswordComponent },
      // { path: 'forgot-password/:email', component: ConfirmForgotNewPasswordComponent },
      // { path: 'confirm-registration/:email', component: ConfirmRegistrationComponent },
      // { path: 'resend-code', component: ResendCodeComponent },
      // { path: 'new-password', component: NewPasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

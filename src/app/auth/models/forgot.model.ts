export interface ForgotModel {
  email: string;
}

export interface ConfirmForgotNewPassword {
  confirmationCode: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable()
export class ValidationService {
  static regexValidator(regex: RegExp, validationKey: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : { [validationKey]: !valid };
    };
  }
}

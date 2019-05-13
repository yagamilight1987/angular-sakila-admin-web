import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import {
  minlengthValidationMessage,
  maxlengthValidationMessage,
  minValidationMessage,
  maxValidationMessage,
  noWhitespaceValidationMessage
} from '../../app.constants';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'whitespace', message: noWhitespaceValidationMessage }
      ]
    })
  ],
  declarations: [],
  exports: []
})
export class AppFormlyModule {}

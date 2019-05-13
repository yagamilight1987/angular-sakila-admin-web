import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { httpInterceptorProviders } from './interceptors';
import { EscapeHtmlPipe } from './pipes';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormlyModule.forRoot()],
  providers: [...httpInterceptorProviders],
  declarations: [EscapeHtmlPipe],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    EscapeHtmlPipe
  ]
})
export class AppSharedModule {}

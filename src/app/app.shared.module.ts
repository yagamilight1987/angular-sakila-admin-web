import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { httpInterceptorProviders } from './interceptors';
import { EscapeHtmlPipe } from './pipes';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [...httpInterceptorProviders],
  declarations: [EscapeHtmlPipe],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    EscapeHtmlPipe,
    MatButtonModule
  ]
})
export class AppSharedModule {}

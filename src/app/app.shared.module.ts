import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormlyModule } from '@ngx-formly/core';
// import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
// import { TableModule } from 'primeng/table';
// import { InputTextModule } from 'primeng/inputtext';
// import { ButtonModule } from 'primeng/button';
// import { AutoCompleteModule } from 'primeng/autocomplete';
// import { TreeModule } from 'primeng/tree';
// import { ChartModule } from 'primeng/chart';
// import { TabViewModule } from 'primeng/tabview';
// import { DynamicDialogModule } from 'primeng/dynamicdialog';
// import { DialogService } from 'primeng/api';
// import { CheckboxModule } from 'primeng/checkbox';
// import { RadioButtonModule } from 'primeng/radiobutton';
// import { CalendarModule } from 'primeng/calendar';
import { httpInterceptorProviders } from './interceptors';
import { EscapeHtmlPipe } from './pipes';

@NgModule({
  imports: [CommonModule, HttpClientModule
    // , NgbModule.forRoot()
  ],
  providers: [...httpInterceptorProviders
    // , DialogService
  ],
  declarations: [EscapeHtmlPipe],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    // NgbModule,
    // FormlyModule,
    // FormlyBootstrapModule,
    // TableModule,
    // InputTextModule,
    // ButtonModule,
    // AutoCompleteModule,
    // TreeModule,
    // ChartModule,
    // TabViewModule,
    // DynamicDialogModule,
    // CheckboxModule,
    // RadioButtonModule,
    // CalendarModule,
    // EscapeHtmlPipe
  ]
})
export class AppSharedModule {}

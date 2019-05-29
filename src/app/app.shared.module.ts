import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { httpInterceptorProviders } from './interceptors';
import { EscapeHtmlPipe, CheckDatePipe, LengthPipe } from './pipes';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [...httpInterceptorProviders, DatePipe],
  declarations: [EscapeHtmlPipe, CheckDatePipe, LengthPipe],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    EscapeHtmlPipe,
    CheckDatePipe,
    LengthPipe,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    NgxChartsModule
  ]
})
export class AppSharedModule {}

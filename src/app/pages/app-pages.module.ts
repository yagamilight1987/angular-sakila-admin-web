import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPagesRoutingModule } from './app-pages-routing.module';
import { AppSharedModule } from '../app.shared.module';
import { AppFormlyModule } from '../components/app-formly/app-formly.module';
import {
  AppFooterComponent,
  AppLayoutComponent,
  AppNavComponent,
  AppSearchComponent
} from './components';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    AppPagesRoutingModule,
    AppSharedModule,
    AppFormlyModule
  ],
  declarations: [
    AppFooterComponent,
    AppLayoutComponent,
    AppNavComponent,
    AppSearchComponent,
    LandingComponent,
    DashboardComponent
  ],
  providers: []
})
export class AppPagesModule {}

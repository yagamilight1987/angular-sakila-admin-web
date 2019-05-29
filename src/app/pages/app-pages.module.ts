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
import { LookupComponent } from './lookup/lookup.component';
import { StoreComponent } from './store/store.component';
import { ProfileComponent } from './profile/profile.component';
import { FilmComponent } from './film/film.component';
import { CustomerComponent } from './customer/customer.component';
import { ActorComponent } from './actor/actor.component';
import {
  UserService,
  LookupService,
  StoreService,
  FilmService,
  ActorService,
  CustomerService,
  ReportService
} from './services';

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
    DashboardComponent,
    LookupComponent,
    StoreComponent,
    ProfileComponent,
    FilmComponent,
    ActorComponent,
    CustomerComponent
  ],
  providers: [
    UserService,
    LookupService,
    StoreService,
    FilmService,
    ActorService,
    CustomerService,
    ReportService
  ]
})
export class AppPagesModule {}

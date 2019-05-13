import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGaurd, LoginGaurd } from './gaurds';
import {
  HelperService,
  SessionStorageService,
  LocalStorageService,
  ValidationService,
  CacheService
} from './services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HelperService,
    SessionStorageService,
    LocalStorageService,
    ValidationService,
    CacheService,
    AuthGaurd,
    LoginGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

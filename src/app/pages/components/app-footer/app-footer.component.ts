import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
  appVersion: string;
  appEnv: string;

  constructor() {}

  ngOnInit() {
    this.appEnv = AppConstants.APP_ENV;
    this.appVersion = AppConstants.APP_VERSION;
  }
}

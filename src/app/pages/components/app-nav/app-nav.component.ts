import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {
  navItems: any[];

  constructor() {}

  ngOnInit() {
    this.navItems = [
      {
        title: 'Home',
        link: '/landing'
      },
      {
        title: 'Dashoard',
        link: '/landing/dashboard'
      },
      {
        title: 'Lookup',
        link: '/landing/lookup'
      },
      {
        title: 'Stores',
        link: '/landing/store'
      },
      {
        title: 'Films',
        link: '/landing/film'
      },
      {
        title: 'Actors',
        link: '/landing/actor'
      },
      {
        title: 'Customers',
        link: '/landing/customer'
      }
    ];
  }
}

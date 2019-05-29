import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  data: any;
  pagination: any;
  columnDefinitions: any[];
  headerRowDefinitions: any[];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.pagination = {
      pageNo: 0,
      pageSize: 10
    };
    this.columnDefinitions = [
      { key: 'firstName', title: 'First Name' },
      { key: 'lastName', title: 'Last Name' },
      { key: 'email', title: 'Email' },
      { key: 'active', title: 'Active' },
      { key: 'createdDate', title: 'Created Date', type: 'date' },
      { key: 'lastUpdate', title: 'Last Update', type: 'date' }
    ];

    this.headerRowDefinitions = [
      'firstName',
      'lastName',
      'email',
      'active',
      'createdDate',
      'lastUpdate'
    ];

    this.getData();
  }

  getData() {
    this.customerService
      .getPagedData(this.pagination.pageNo, this.pagination.pageSize)
      .subscribe(resp => (this.data = resp));
  }

  pageOptionsChanged(event: PageEvent) {
    this.pagination.pageNo = event.pageIndex;
    if (this.pagination.pageSize !== event.pageSize) {
      this.pagination.pageNo = 1;
      this.pagination.pageSize = event.pageSize;
    }

    this.getData();
  }
}

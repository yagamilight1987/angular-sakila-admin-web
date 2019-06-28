import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { CustomerService } from '../services';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  searchForm: FormGroup;
  data: any;
  pagination: any;
  columnDefinitions: any[];
  headerRowDefinitions: any[];

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      active: true
    });
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
    const formData = this.searchForm.value;
    const data: any = {
      active: formData.active,
      skip: this.pagination.pageNo * this.pagination.pageSize,
      take: this.pagination.pageSize
    };
    if (this.searchForm.valid && formData) {
      if (formData.firstName) {
        data.firstName = formData.firstName;
      }
      if (formData.lastName) {
        data.lastName = formData.lastName;
      }
      if (formData.email) {
        data.email = formData.email;
      }
    }

    this.customerService
      .getPagedData(data)
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

  reset() {
    this.searchForm.reset();
    this.searchForm.patchValue({ active: true });
    this.getData();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActorService } from '../services';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  searchForm: FormGroup;
  data: any;
  pagination: any;
  columnDefinitions: any[];
  headerRowDefinitions: any[];

  constructor(private fb: FormBuilder, private actorService: ActorService) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      firstName: '',
      lastName: ''
    });
    this.pagination = {
      pageNo: 0,
      pageSize: 10
    };
    this.columnDefinitions = [
      { key: 'firstName', title: 'First Name' },
      { key: 'lastName', title: 'Last Name' },
      { key: 'lastUpdate', title: 'Last Update', type: 'date' }
    ];

    this.headerRowDefinitions = ['firstName', 'lastName', 'lastUpdate'];

    this.getData();
  }

  getData() {
    const formData = this.searchForm.value;
    const data: any = {
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

    this.actorService.getPagedData(data).subscribe(resp => (this.data = resp));
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
    this.getData();
  }
}

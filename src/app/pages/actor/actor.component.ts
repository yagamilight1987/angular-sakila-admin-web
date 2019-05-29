import { Component, OnInit } from '@angular/core';
import { ActorService } from '../services';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  data: any;
  pagination: any;
  columnDefinitions: any[];
  headerRowDefinitions: any[];

  constructor(private actorService: ActorService) {}

  ngOnInit() {
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
    this.actorService
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

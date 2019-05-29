import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FilmService } from '../services';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  data: any;
  pagination: any;
  columnDefinitions: any[];
  headerRowDefinitions: any[];

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.pagination = {
      pageNo: 0,
      pageSize: 10
    };
    this.columnDefinitions = [
      { key: 'title', title: 'Title' },
      { key: 'releaseYear', title: 'Release Year' },
      { key: 'rentalDuration', title: 'Rental Duration', type: 'days' },
      { key: 'rentalRate', title: 'Rental Rate', type: 'rate' },
      { key: 'lengthOfFilm', title: 'Length (in mins)', type: 'length' },
      { key: 'replacementCost', title: 'Replacement Cost', type: 'rate' },
      { key: 'rating', title: 'Rating' },
      { key: 'lastUpdate', title: 'Last Update', type: 'date' }
    ];

    this.headerRowDefinitions = [
      'title',
      'releaseYear',
      'rentalDuration',
      'rentalRate',
      'lengthOfFilm',
      'replacementCost',
      'rating',
      'lastUpdate'
    ];

    this.getData();
  }

  getData() {
    this.filmService
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

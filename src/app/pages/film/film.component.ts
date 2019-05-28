import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  films$: Observable<any>;
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
      // { key: 'id', title: 'Id' },
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
      // 'id',
      'title',
      'releaseYear',
      'rentalDuration',
      'rentalRate',
      'lengthOfFilm',
      'replacementCost',
      'rating',
      'lastUpdate'
    ];
    this.films$ = this.filmService.getFilmPaged(
      this.pagination.pageNo,
      this.pagination.pageSize
    );
  }

  pageOptionsChanged(event: PageEvent) {
    this.pagination.pageNo = event.pageIndex;
    if (this.pagination.pageSize !== event.pageSize) {
      this.pagination.pageNo = 1;
      this.pagination.pageSize = event.pageSize;
    }

    console.log(this.pagination);
  }
}

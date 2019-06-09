import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { FilmService, LookupService } from '../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  searchForm: FormGroup;
  lookupData$: Observable<any>;
  category$: Observable<any>;
  language$: Observable<any>;
  data: any;
  pagination: any;
  columnDefinitions: any[];
  headerRowDefinitions: any[];

  constructor(
    private fb: FormBuilder,
    private filmService: FilmService,
    private lookupService: LookupService
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      title: '',
      category: '',
      language: '',
      rentalRate: '',
      filmLengthId: '',
      rentalDuration: '',
      releaseYear: '',
      filmRating: '',
      sort: ''
    });
    this.getLookupData();
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

  getLookupData() {
    this.category$ = this.lookupService.getLookupData('category');
    this.language$ = this.lookupService.getLookupData('language');
    this.lookupData$ = this.filmService.getLookupData();
  }

  getData() {
    const formData = this.searchForm.value;
    const data: any = {
      skip: this.pagination.pageNo * this.pagination.pageSize,
      take: this.pagination.pageSize
    };
    if (this.searchForm.valid && formData) {
      if (formData.title) {
        data.title = formData.title;
      }
      if (formData.category) {
        data.category = formData.category;
      }
      if (formData.releaseYear) {
        data.releaseYear = formData.releaseYear;
      }
      if (formData.language) {
        data.languageId = formData.language;
      }
      if (formData.rentalDuration) {
        data.rentalDuration = formData.rentalDuration;
      }
      if (formData.rentalRate) {
        data.rentalRate = formData.rentalRate;
      }
      if (formData.filmLengthId) {
        data.lengthId = formData.filmLengthId;
      }
      if (formData.filmRating) {
        data.rating = formData.filmRating;
      }
    }

    this.filmService.getPagedData(data).subscribe(resp => (this.data = resp));
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

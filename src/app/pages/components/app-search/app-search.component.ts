import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export const filter = (opt: any[], value: string): any[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(
    item => item.title.toLowerCase().indexOf(filterValue) === 0
  );
};

export interface SearchGroup {
  type: string;
  options: { title: string; id: number }[];
}

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent implements OnInit {
  searchGroup: any[];
  searchForm: FormGroup;
  searchGroupOptions: Observable<SearchGroup[]>;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchText: ''
    });
    this.searchGroup = [
      {
        type: 'Movie',
        options: [
          {
            title: 'The Dark Knight',
            id: 23455
          }
        ]
      },
      {
        type: 'Actor',
        options: [
          {
            title: 'Leonardo Di Caprio',
            id: 45346
          }
        ]
      }
    ];
    // tslint:disable-next-line:no-non-null-assertion
    this.searchGroupOptions = this.searchForm
      .get('searchText')!
      .valueChanges.pipe(
        startWith(''),
        map(value => this.filterGroup(value))
      );
  }

  private filterGroup(value: string): SearchGroup[] {
    if (value) {
      return this.searchGroup
        .map(group => ({
          type: group.type,
          options: filter(group.options, value)
        }))
        .filter(group => group.options.length > 0);
    }

    return this.searchGroup;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';
import { of, Observable } from 'rxjs';

@Injectable()
export class LookupService {
  constructor(private http: HttpClient) {}

  getLookupEntities(): Observable<any[]> {
    return of([
      {
        id: 1,
        title: 'Language',
        route: 'language'
      },
      {
        id: 2,
        title: 'Category',
        route: 'category'
      },
      {
        id: 3,
        title: 'Country',
        route: 'country'
      }
    ]);
  }

  getLookupData(route: string): Observable<any> {
    const url = `${AppConstants.API_BASE_URL}${route}`;
    return this.http.get(url);
  }
}

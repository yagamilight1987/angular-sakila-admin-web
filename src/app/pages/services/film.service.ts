import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';
import { Observable } from 'rxjs';

@Injectable()
export class FilmService {
  constructor(private http: HttpClient) {}

  getFilmPaged(pageNo: any, pageSize: any): Observable<any> {
    const url = `${AppConstants.API_BASE_URL}film/page`;
    const data = {
      skip: pageNo * pageSize,
      take: pageSize
    };
    return this.http.post(url, data);
  }
}

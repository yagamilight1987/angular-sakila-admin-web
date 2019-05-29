import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';
import { Observable } from 'rxjs';

@Injectable()
export class ReportService {
  constructor(private http: HttpClient) { }

  getSalesByStore(): Observable<any> {
    const url = `${AppConstants.API_BASE_URL}report/sales-by-store`;
    return this.http.get(url);
  }

  getSalesByFilmCategory(): Observable<any> {
    const url = `${AppConstants.API_BASE_URL}report/sales-by-film-category`;
    return this.http.get(url);
  }
}

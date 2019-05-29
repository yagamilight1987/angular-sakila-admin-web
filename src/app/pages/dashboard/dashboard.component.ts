import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  salesByStore$: Observable<any>;
  salesByStoreConfig: any;
  salesByFilmCategory$: Observable<any>;
  salesByFilmCategoryConfig: any;

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.salesByStoreConfig = {
      colorScheme: {
        domain: ['#00843D', '#FF0000']
      },
      gradient: false,
      showXAxis: true,
      showYAxis: true,
      roundDomains: true,
      showXAxisLabel: true,
      showYAxisLabel: true,
      xAxisLabel: 'Sales (in dollar)',
      yAxisLabel: 'Store',
      showLegend: true,
      showDataLabel: true,
      barPadding: 25
    };
    this.salesByFilmCategoryConfig = {
      colorScheme: 'aqua',
      schemeType: 'linear',
      gradient: false,
      showXAxis: true,
      showYAxis: true,
      roundDomains: true,
      showXAxisLabel: true,
      showYAxisLabel: true,
      xAxisLabel: 'Sales (in dollar)',
      yAxisLabel: 'Film Category',
      showLegend: true,
      showDataLabel: true,
      barPadding: 5
    };

    this.salesByStore$ = this.reportService.getSalesByStore().pipe(
      map(items =>
        items.map(item => {
          return { name: item.store, value: item.total_sales };
        })
      )
    );
    this.salesByFilmCategory$ = this.reportService
      .getSalesByFilmCategory()
      .pipe(
        map(items =>
          items.map(item => {
            return { name: item.category, value: item.total_sales };
          })
        )
      );
  }
}

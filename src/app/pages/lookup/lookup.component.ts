import { Component, OnInit } from '@angular/core';
import { LookupService } from '../services/lookup.service';
import { Observable } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {
  lookupTypes$: Observable<any>;
  data: any[];
  columnDefinitions: any[];

  constructor(private lookupService: LookupService) {}

  ngOnInit() {
    this.lookupTypes$ = this.lookupService.getLookupEntities();
  }

  onLookupTypeSelectChanged(event: MatSelectChange) {
    if (event.value) {
      this.lookupService
        .getLookupData(event.value)
        .subscribe((response: any[]) => {
          this.columnDefinitions = [];
          Object.keys(response[0]).map(item => {
            this.columnDefinitions.push(item);
          });
          this.data = response;
        });
    } else  {
      this.columnDefinitions = [];
      this.data = [];
    }
  }
}

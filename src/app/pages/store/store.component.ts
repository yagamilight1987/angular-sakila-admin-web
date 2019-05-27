import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  stores$: Observable<any>;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.stores$ = this.storeService.getStores();
  }
}

import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as wheatherActions from '../app/wheather/state/wheather.action';
import * as fromWheather from '../app/wheather/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'WeatherForecast';
  searchResult: Subscription;
  searchResultData: any[];

  constructor(private store: Store<fromWheather.State>) { }

  ngOnInit() {
    // this.store.dispatch(new wheatherActions.SearchCity('tel'));
    this.searchResult = this.store.select(fromWheather.getsearchResult).subscribe(data => {
      this.searchResultData = data;
    });
  }

  ngOnDestroy() {
    this.searchResult.unsubscribe();
  }
}

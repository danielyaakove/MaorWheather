import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as wheatherActions from '../../wheather/state/wheather.action';
import * as fromWheather from '../../wheather/state';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchResult: Subscription;
  searchResultData: any[];
  CityWheatherResult: Subscription;
  CityWheatherData: Subscription;
  Erorr: Subscription;

  keyword = 'LocalizedName';
  constructor(private store: Store<fromWheather.State>, private toastr: ToastrService) { }

  ngOnInit() {
    // 215854
    this.searchResult = this.store.select(fromWheather.getsearchResult).subscribe(data => {
      this.searchResultData = data;
    });

    this.CityWheatherResult = this.store.select(fromWheather.GetCityWheather).subscribe(data => {
      this.CityWheatherData = data;
    });

    this.Erorr = this.store.select(fromWheather.GetError).subscribe(data => {
      if (data != null) {
        this.showError();
      }
    });
  }

  ngOnDestroy() {
    this.searchResult.unsubscribe();
    this.CityWheatherResult.unsubscribe();
    this.Erorr.unsubscribe();
  }
  selectEvent(item) {
    this.store.dispatch(new wheatherActions.SetSelectedCity(item));
    this.store.dispatch(new wheatherActions.GetCityWheather(item.Key));
    // this.store.dispatch(new wheatherActions.Get5DaysWheather(item.Key));
    // do something with selected item
  }

  onChangeSearch(search: string) {
     this.store.dispatch(new wheatherActions.SearchCity(search));
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }
  showError() {
    this.toastr.error('', 'error occurred',{positionClass: 'toast-bottom-right'});
  }

}

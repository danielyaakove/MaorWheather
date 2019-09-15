import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as wheatherActions from '../../wheather/state/wheather.action';
import * as fromWheather from '../../wheather/state';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'WeatherForecast';
  selectedCity: Subscription;
  selectedCityData: any;
  selectedCityWheather: Subscription;
  selectedCityWheatherData: any;
  
  constructor(private store: Store<fromWheather.State>, private toastr: ToastrService) { }

  ngOnInit() {
    this.selectedCity = this.store.select(fromWheather.GetCityWheather).subscribe(data => {
      this.selectedCityData = data;
    });
    this.selectedCityWheather = this.store.select(fromWheather.GetFiveDaysWheather).subscribe(data => {
      this.selectedCityWheatherData = data;
    });
  }

  ngOnDestroy() {
    this.selectedCity.unsubscribe();
    this.selectedCityWheather.unsubscribe();

  }

}

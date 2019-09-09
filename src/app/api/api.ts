import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiKey = 'qczFxEDSyMyGIlgF8KRO3IzaOLDyV7M2';
  private apiBaseUrl = 'http://dataservice.accuweather.com';
  private loc = '/locations/v1/';
  private curent = '/currentconditions/v1/';
  private fiveDays = '/forecasts/v1/daily/5day/';
  private autocompleteMethod = 'cities/autocomplete';
  private obs = new Subject<any>();
  private favoriets: any = [];
  constructor(private httpClient: HttpClient) {}

  searchCity(name: string): Observable<any> {
    const p = {
      apikey: this.apiKey,
      q: name
    };


    return this.httpClient.get(this.apiBaseUrl + this.loc + this.autocompleteMethod, {
      params: p
    });
  }
  getForeCastByLocationKey(key: number): Observable<any> {
    const p = {
      apikey: this.apiKey
    };
debugger
    return this.httpClient.get(this.apiBaseUrl + this.curent + key, {
      params: p
    });
  }

  getFiveDaysByLocationKey(key: number): Observable<any> {
    const p = {
      apikey: this.apiKey
    };
debugger

    return this.httpClient.get(this.apiBaseUrl + this.fiveDays + key, {
      params: p
    });
  }

  addToFavoriet(city: any){
    this.favoriets.push(city);
  }
  getFavoriet(){
   return this.favoriets;
  }
}

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as wheatherActions from './wheather.action';
import { ApiService } from 'src/app/api/api';

@Injectable()
export class WheatherEffects {
  constructor(private api: ApiService, private actions$: Actions) { }

  @Effect()
  SearchCity$: Observable<Action> = this.actions$.pipe(
    ofType(wheatherActions.WheatherActionTypes.SearchCity),
    map((action: wheatherActions.SearchCity) => action.payload),
    mergeMap((searchText: any) =>
      this.api.searchCity(searchText).pipe(
        map(searchTextResulte => (new wheatherActions.SearchCitySuccess(searchTextResulte))),
        catchError(err => of(new wheatherActions.SearchCityFail(err)))
      )
    )
  );

  @Effect()
  GetCityWheather$: Observable<Action> = this.actions$.pipe(
    ofType(wheatherActions.WheatherActionTypes.GetCityWheather),
    map((action: wheatherActions.GetCityWheather) => action.payload),
    mergeMap((cityKey: any) =>
      this.api.getForeCastByLocationKey(cityKey).pipe(
        map(cityWheather => (new wheatherActions.GetCityWheatherSuccess(cityWheather))),
        catchError(err => of(new wheatherActions.SearchCityFail(err)))
      )
    )
  );

  @Effect()
  Get5DaysWheather$: Observable<Action> = this.actions$.pipe(
    ofType(wheatherActions.WheatherActionTypes.GetCityWheather),
    map((action: wheatherActions.Get5DaysWheather) => action.payload),
    mergeMap((cityKey: any) =>
      this.api.getFiveDaysByLocationKey(cityKey).pipe(
        map(cityWheather => (new wheatherActions.Get5DaysWheatherSuccess(cityWheather))),
        catchError(err => of(new wheatherActions.SearchCityFail(err)))
      )
    )
  );
}

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
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType(wheatherActions.WheatherActionTypes.SearchCity),
    map((action: wheatherActions.SearchCity) => action.payload),
    mergeMap((searchText: any) =>
      this.api.searchCity(searchText).pipe(
        map(searchTextResulte => (new wheatherActions.SearchCitySuccess(searchTextResulte))),
        catchError(err => of(new wheatherActions.SearchCityFail(err)))
      )
    )
  );
}

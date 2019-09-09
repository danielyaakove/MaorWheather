import { Action } from '@ngrx/store';
import { Wheather } from '../Wheather';
import { Favorite } from '../favorite'

export enum WheatherActionTypes {
  AddToFavorite = '[Wheather] add to favorite',
  AddToFavoriteSuccess = '[Wheather] add to favorite Success',
  RemoveFromFavorite = '[Wheather] remove from favorite',
  RemoveFromFavoriteSuccess = '[Wheather] remove from favorite Success',
  SearchCity = '[Wheather] search city',
  SearchCitySuccess = '[Wheather] search city Success',
  SearchCityFail = '[Wheather] search city Fail',
  GetCityWheather = '[Wheather] get city wheather',
  GetCityWheatherSuccess = '[Wheather] get city wheather Success',
  Get5DaysWheather = '[Wheather] get 5 days wheather',
  Get5DaysWheatherSuccess = '[Wheather] get 5 days wheather Success'

}

export class AddToFavorite implements Action {
  readonly type = WheatherActionTypes.AddToFavorite;
  constructor(public payload: number) { }
}

export class AddToFavoriteSuccess implements Action {
    readonly type = WheatherActionTypes.AddToFavoriteSuccess;
    constructor(public payload: Favorite) { }
  }

export class RemoveFromFavorite implements Action {
    readonly type = WheatherActionTypes.RemoveFromFavorite;
    constructor(public payload: number) { }
}
export class SearchCity implements Action {
    readonly type = WheatherActionTypes.SearchCity;
    constructor(public payload: string) { }
}
export class SearchCityFail implements Action {
  readonly type = WheatherActionTypes.SearchCityFail;

  constructor(public payload: string) { }
}
export class SearchCitySuccess implements Action {
  readonly type = WheatherActionTypes.SearchCitySuccess;
  constructor(public payload: any) { }
}
export class GetCityWheather implements Action {
    readonly type = WheatherActionTypes.GetCityWheather;
    constructor(public payload: number) { }
}
export class GetCityWheatherSuccess implements Action {
  readonly type = WheatherActionTypes.GetCityWheatherSuccess;
  constructor(public payload: any) { }
}
export class Get5DaysWheather implements Action {
    readonly type = WheatherActionTypes.Get5DaysWheather;
    constructor(public payload: number) { }
}
export class Get5DaysWheatherSuccess implements Action {
  readonly type = WheatherActionTypes.Get5DaysWheatherSuccess;
  constructor(public payload: any) { }
}

export type WheatherActions = AddToFavorite | AddToFavoriteSuccess | RemoveFromFavorite | SearchCity | SearchCityFail 
| SearchCitySuccess | GetCityWheather| GetCityWheatherSuccess | Get5DaysWheather | Get5DaysWheatherSuccess;

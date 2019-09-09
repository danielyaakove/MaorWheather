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
  getCityWheather = '[Wheather] get city wheather',
  getCityWheatherSuccess = '[Wheather] get city wheather Success',
  get5DaysWheather = '[Wheather] get 5 days wheather',
  get5DaysWheatherSuccess = '[Wheather] get 5 days wheather Success'

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
export class SearchCitySuccess implements Action {
  readonly type = WheatherActionTypes.SearchCitySuccess;
  constructor(public payload: any) { }
}
export class GetCityWheather implements Action {
    readonly type = WheatherActionTypes.getCityWheather;
    constructor(public payload: number) { }
}
export class GetCityWheatherSuccess implements Action {
  readonly type = WheatherActionTypes.getCityWheather;
  constructor(public payload: any) { }
}
export class Get5DaysWheather implements Action {
    readonly type = WheatherActionTypes.get5DaysWheather;
    constructor(public payload: number) { }
}
export class Get5DaysWheatherSuccess implements Action {
  readonly type = WheatherActionTypes.get5DaysWheather;
  constructor(public payload: any) { }
}

export type WheatherActions = AddToFavorite | RemoveFromFavorite | SearchCity | GetCityWheather | Get5DaysWheather 
| AddToFavoriteSuccess | SearchCitySuccess;

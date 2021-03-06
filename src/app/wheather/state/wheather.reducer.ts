import { Wheather } from '../Wheather';
import { Favorite } from '../favorite';
import { WheatherActionTypes, WheatherActions } from './wheather.action';

export interface WheatherState {
  city: any;
  currentWheather: any;
  fiveDaysWheather: any;
  favorites: Favorite[];
  error: any;
  searchResult: any[];
}
const initialState: WheatherState = {
  city: null,
  currentWheather: null,
  fiveDaysWheather: null,
  favorites: null,
  error: null,
  searchResult: []
};

export function reducer(state = initialState, action: WheatherActions): WheatherState {
  switch (action.type) {
    case WheatherActionTypes.SearchCitySuccess:
      return {
        ...state, searchResult: action.payload
      };
      case WheatherActionTypes.ApiCallFail:
          return {
            ...state, error: action.payload
          };
    case WheatherActionTypes.GetCityWheatherSuccess:
      return {
        ...state, currentWheather: action.payload[0]
      };
    case WheatherActionTypes.Get5DaysWheatherSuccess:
      return {
        ...state, fiveDaysWheather: action.payload
      };
    case WheatherActionTypes.AddToFavoriteSuccess:
      return {
        ...state, favorites: state.favorites.concat(action.payload)
      };
    case WheatherActionTypes.RemoveFromFavorite:
      return {
        ...state, favorites: state.favorites.filter(item => item.Key !== action.payload)
      };
      case WheatherActionTypes.SetSelectedCity:
      return{
        ...state, city : action.payload
      }
    default:
      return state;
  }
}

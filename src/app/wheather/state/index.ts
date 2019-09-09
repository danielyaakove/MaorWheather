import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromWheather from './wheather.reducer';

export interface State extends fromRoot.State {
    wheather: fromWheather.WheatherState;
}
const getWheatherState = createFeatureSelector<fromWheather.WheatherState>('wheather');
export const getsearchResult = createSelector(
    getWheatherState,
    state => state.searchResult
);

export const GetCityWheather = createSelector(
    getWheatherState,
    state => state.currentWheather
);
export const GetSelectedCity = createSelector(
    getWheatherState,
    state => state.city
);
export const GetFiveDaysWheather = createSelector(
    getWheatherState,
    state => state.fiveDaysWheather
);
export const GetFavorites = createSelector(
    getWheatherState,
    state => state.favorites
);

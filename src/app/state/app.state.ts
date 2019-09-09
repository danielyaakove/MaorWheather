import { WheatherState } from '../wheather/state/wheather.reducer';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  user: WheatherState;
}
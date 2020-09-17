import { environment } from './../../../environments/environment.prod';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { youtubeReducer } from './youtube.reducer';
import { IYoutubeState } from '../youtube.state';

export interface IAppState {
  youtube: IYoutubeState;
}

export const reducers: ActionReducerMap<IAppState> = {
  youtube: youtubeReducer,
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];

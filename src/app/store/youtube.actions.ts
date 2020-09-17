import { createAction, props } from '@ngrx/store';
import { ISearchItem } from '../models/search-item.model';
import { ISortItems } from './youtube.state';

export enum EYoutubeActions {
  LoadList = '[Youtube] Load List',
  LoadOneItem = '[Youtube] Load One Item',
  SetList = '[Youtube] Set List',
  SetSort = '[Youtube] Set Sort',
  SetUser = '[Youtube] Set User',
  AddCustomItemLocal = '[Youtube] Add Custom Item Local',
  AddCustomItem = '[Youtube] Add Custom Item',
}

export const LoadList = createAction(EYoutubeActions.LoadList, props<{ search: string }>());
export const LoadOneItem = createAction(EYoutubeActions.LoadOneItem, props<{ search: string }>());
export const SetList = createAction(EYoutubeActions.SetList, props<{ items: ISearchItem[] }>());
export const SetSort = createAction(EYoutubeActions.SetSort, props<{ sort: ISortItems }>());
export const SetUser = createAction(EYoutubeActions.SetUser, props<{ user: string }>());
export const AddCustomItemLocal = createAction(
  EYoutubeActions.AddCustomItemLocal,
  props<{ customItem: ISearchItem }>(),
);
export const AddCustomItem = createAction(
  EYoutubeActions.AddCustomItem,
  props<{ customItem: ISearchItem }>(),
);

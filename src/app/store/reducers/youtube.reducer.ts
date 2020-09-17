import { createReducer, on } from '@ngrx/store';
import { initialYoutubeState, IYoutubeState } from '../youtube.state';
import { SetList, SetUser, AddCustomItem, SetSort } from '../youtube.actions';

const _youtubeReducer = createReducer(
  initialYoutubeState,
  on(SetList, (state: IYoutubeState, { items }) => ({ ...state, items })),
  on(SetSort, (state: IYoutubeState, { sort }) => ({ ...state, sort })),
  on(SetUser, (state: IYoutubeState, { user }) => ({ ...state, user })),
  on(AddCustomItem, (state: IYoutubeState, { customItem }) => ({
    ...state,
    customItems: [...state.customItems, customItem],
  })),
);

export function youtubeReducer(state, action) {
  return _youtubeReducer(state, action);
}

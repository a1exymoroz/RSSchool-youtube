import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import {
  LoadList,
  SetList,
  LoadOneItem,
  AddCustomItemLocal,
  AddCustomItem,
} from './youtube.actions';
import { YoutubeService } from '../youtube/services/youtube.service';
import { IYoutubeVideo } from '../models/search-item.model';
import { of } from 'rxjs';

@Injectable()
export class YoutubeEffects {
  constructor(private actions$: Actions, private youtubeService: YoutubeService) {}

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadList),
      mergeMap((payload) =>
        this.youtubeService
          .search(payload.search)
          .pipe(map((result: IYoutubeVideo) => SetList({ items: result.items }))),
      ),
    ),
  );

  searchOneItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadOneItem),
      mergeMap((payload) =>
        this.youtubeService
          .searchOneItem(payload.search)
          .pipe(map((result: IYoutubeVideo) => SetList({ items: result.items }))),
      ),
    ),
  );
  addCustomLocal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddCustomItemLocal),
      switchMap((payload) => {
        let items = JSON.parse(localStorage.getItem('customItems'));
        items = [...items, payload.customItem];
        localStorage.setItem('customItems', JSON.stringify(items));
        return of(AddCustomItem({ customItem: payload.customItem }));
      }),
    ),
  );
}

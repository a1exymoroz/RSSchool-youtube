import { ISearchItem } from './../models/search-item.model';
import { createSelector } from '@ngrx/store';
import { IYoutubeState, ISortItems } from './youtube.state';

const youtubeFeature = (state) => {
  return state ? state.youtube : [];
};

export const getSort = createSelector(youtubeFeature, (youtube: IYoutubeState) => {
  return youtube.sort;
});

export const getUser = createSelector(youtubeFeature, (youtube: IYoutubeState) => {
  return youtube.user;
});

export const getYoutubeItems = createSelector(youtubeFeature, (youtube: IYoutubeState) => {
  return youtube.items;
});

export const getCustomItems = createSelector(youtubeFeature, (youtube: IYoutubeState) => {
  return youtube.customItems;
});

export const getYoutubeItemsBySort = createSelector(
  getYoutubeItems,
  getSort,
  (items: ISearchItem[], sort: ISortItems) => {
    let currentList = [...items];

    if (sort.word) {
      currentList = currentList.filter((item) =>
        item.snippet.title.toLowerCase().includes(sort.word.toLowerCase()),
      );
    }

    if (sort.value && sort.type) {
      const sortCallback = {
        views: (a: ISearchItem, b: ISearchItem) =>
          Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
        date: (a: ISearchItem, b: ISearchItem) =>
          new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime(),
      };

      currentList = currentList.slice().sort(sortCallback[sort.value]);

      if (sort.type === 'desc') {
        currentList.reverse();
      }
    }

    return currentList;
  },
);

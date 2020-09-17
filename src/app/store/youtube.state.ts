import { ISearchItem } from '../models/search-item.model';

export interface IYoutubeState {
  items: ISearchItem[];
  sort: ISortItems;
  user: string;
  customItems: ISearchItem[];
}

export interface ISortItems {
  value: string;
  type: 'asc' | 'desc' | null;
  word: string;
}
const localUser = localStorage.getItem('user');
const user = localUser ? localUser : '';

const localCustomItems = JSON.parse(localStorage.getItem('customItems'));
let customItems = [];
if (!localCustomItems) {
  localStorage.setItem('customItems', JSON.stringify(customItems));
} else {
  customItems = localCustomItems;
}
export const initialYoutubeState: IYoutubeState = {
  items: [],
  sort: {
    value: '',
    type: null,
    word: '',
  },
  user,
  customItems,
};

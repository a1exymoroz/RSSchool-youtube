import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchItem } from 'src/app/models/search-item.model';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers';
import {
  getYoutubeItems,
  getCustomItems,
  getYoutubeItemsBySort,
} from 'src/app/store/youtube.selector';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  searchItems$: Observable<ISearchItem[]>;
  customItems$: Observable<ISearchItem[]>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    // this.searchItems$ = this.store.select(getYoutubeItems);
    this.searchItems$ = this.store.select(getYoutubeItemsBySort);

    this.customItems$ = this.store.select(getCustomItems);
  }
}

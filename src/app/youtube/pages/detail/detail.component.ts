import { mergeMap, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { ISearchItem } from 'src/app/models/search-item.model';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers';
import { getCustomItems, getYoutubeItems } from 'src/app/store/youtube.selector';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadOneItem } from 'src/app/store/youtube.actions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  searchItem$: Observable<ISearchItem>;

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.searchItem$ = combineLatest([
      this.store.select(getYoutubeItems),
      this.store.select(getCustomItems),
      this.route.params.pipe(map((params) => params['id'])),
    ]).pipe(
      map(([items, custumItems, id]) => {
        const splitId = id.split('_');
        if (splitId[0] === 'custom') {
          return custumItems.find((item) => item.id === id);
        }

        const item = items.find((item) => item.id === id);
        if (!item) {
          this.store.dispatch(LoadOneItem({ search: id }));
        }
        return item;
      }),
    );
  }

  onClickBack() {
    this.router.navigate(['/main']);
  }

  getDiffDays(item: ISearchItem) {
    const date1 = new Date(item.snippet.publishedAt);
    const date2 = new Date();

    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
}

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers';
import { getSort } from 'src/app/store/youtube.selector';
import { Observable } from 'rxjs';
import { ISortItems } from 'src/app/store/youtube.state';
import { SetSort } from 'src/app/store/youtube.actions';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  sort$: Observable<ISortItems>;
  sortWordControl: FormControl;

  constructor(private store: Store<IAppState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.sort$ = this.store.pipe(select(getSort));
    this.sortWordControl = this.fb.control('');
  }

  onSort(sort: ISortItems, key: string) {
    const currentSort = { ...sort };

    if (currentSort.value === key) {
      switch (currentSort.type) {
        case 'asc':
          currentSort.type = 'desc';
          break;
        case 'desc':
          currentSort.type = null;
          break;
        default:
          currentSort.type = 'asc';
          break;
      }
    } else {
      currentSort.type = 'asc';
    }

    currentSort.value = key;

    this.store.dispatch(SetSort({ sort: currentSort }));
  }

  onSortByWord(sort: ISortItems) {
    const currentSort = { ...sort, word: this.sortWordControl.value };
    this.store.dispatch(SetSort({ sort: currentSort }));
  }

  getIcon(sort: ISortItems, key: string) {
    if (sort.value !== key || !sort.type) {
      return false;
    }

    return sort.type === 'asc' ? 'arrow_downward' : 'arrow_upward';
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers';
import { LoadList } from 'src/app/store/youtube.actions';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: [''],
    });
    this.searchForm.controls.search.valueChanges
      .pipe(
        filter((result) => result.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe((result) => {
        this.store.dispatch(LoadList({ search: result }));
      });
  }

  clearInput() {
    this.searchForm.setValue({
      search: '',
    });
  }
}

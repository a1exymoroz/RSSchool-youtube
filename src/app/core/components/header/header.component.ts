import { SetList } from './../../../store/youtube.actions';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers';
import { getUser } from 'src/app/store/youtube.selector';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { SetUser } from 'src/app/store/youtube.actions';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<string>;
  isShowSearchSort: BehaviorSubject<boolean>;

  constructor(private store: Store<IAppState>, private router: Router) {}

  ngOnInit() {
    this.isShowSearchSort = new BehaviorSubject(false);
    this.user$ = this.store.select(getUser);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((result: RouterEvent) => {
        this.isShowSearchSort.next(result.url === '/main');
      });
  }

  onClickLogout() {
    localStorage.removeItem('user');
    this.store.dispatch(SetUser({ user: '' }));
    this.store.dispatch(SetList({ items: [] }));
    this.router.navigate(['/login']);
  }
}

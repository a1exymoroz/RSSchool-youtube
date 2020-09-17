import { Injectable } from '@angular/core';
import { UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAppState } from 'src/app/store/reducers';
import { getUser } from 'src/app/store/youtube.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthLoadGuard implements CanLoad {
  user$: Observable<string>;

  constructor(private store: Store<IAppState>, private router: Router) {
    this.user$ = this.store.select(getUser);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.user$.pipe(
      map((user) => {
        let isActivate = true;
        if (!user.length) {
          isActivate = false;
          this.router.navigate(['/login']);
        }
        return isActivate;
      }),
    );
  }
}

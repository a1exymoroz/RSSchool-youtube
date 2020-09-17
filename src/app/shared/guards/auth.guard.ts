import { getUser } from './../../store/youtube.selector';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  user$: Observable<string>;

  constructor(private store: Store<IAppState>, private router: Router) {
    this.user$ = this.store.select(getUser);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
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

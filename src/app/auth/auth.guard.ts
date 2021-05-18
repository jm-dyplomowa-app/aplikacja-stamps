import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanLoad,
  CanActivateChild,
  RouterLink,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { selectAuthUserProfile } from '.';
import { AppState } from '../shared/app-state';
import { AnyUserDTO, UserDTO } from '../shared/models/User';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  user$: Observable<AnyUserDTO> = this.store.select(selectAuthUserProfile);

  constructor(
    public auth: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    this.user$.pipe(take(1)).subscribe((user: UserDTO) => {
      if (user) {
        if (route.data.exptectedRoles && route.data.exptectedRoles.length) {
          const userRoleCorrect: boolean = route.data.exptectedRoles.find(
            (role) => user.role === role
          );

          if (userRoleCorrect) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        this.router.navigate(['/auth/log-in']);
        return false;
      }
    });

    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    return this.canActivate(next, state);
  }
}

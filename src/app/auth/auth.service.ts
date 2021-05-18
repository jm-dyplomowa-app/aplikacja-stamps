import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { AppState } from '../shared/app-state';
import { Store } from '@ngrx/store';
import { logout } from './auth.actions';
import { FireService } from '../fire.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl: string;
  isLogged = false;
  constructor(
    public router: Router,
    private fire: FireService,
    private store: Store<AppState>
  ) {}

  async login(email: string, password: string) {
    this.isLogged = true;

    return this.fire.fireAuthenticate(email, password);
  }

  async register(email: string, password: string, data: any) {
    return this.fire.createFireAuthAndUser(email, password, data);
  }

  get fireAuth$(): Observable<User | null> {
    return this.fire.fireAuth$;
  }

  logout() {
    this.fire.signOut();
    this.store.dispatch(logout());

    this.isLogged = false;
  }
}

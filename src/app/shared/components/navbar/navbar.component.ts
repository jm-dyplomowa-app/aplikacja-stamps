import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthUserProfile } from 'src/app/auth';
import { AuthService } from 'src/app/auth/auth.service';
import { AppState } from '../../app-state';
import { UserDTO } from '../../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  user$: Observable<UserDTO> = this.store.select(selectAuthUserProfile);

  constructor(public auth: AuthService, private store: Store<AppState>) {}

  logout() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectAuthUserProfile } from 'src/app/auth';
import { AuthService } from 'src/app/auth/auth.service';
import { AppState } from 'src/app/shared/app-state';
import { UserDTO } from 'src/app/shared/models/User';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  user$: Observable<UserDTO> = this.store.select(selectAuthUserProfile);

  constructor(public auth: AuthService, private store: Store<AppState>) {}

  ngOnInit(): void {}
}

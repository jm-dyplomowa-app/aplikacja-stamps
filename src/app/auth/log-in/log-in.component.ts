import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UserDTO } from 'src/app/shared/models/User';
import { AppState } from 'src/app/shared/app-state';
import { AuthService } from '../auth.service';
import { login } from '../auth.actions';
import { FireService } from 'src/app/fire.service';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit, OnDestroy {
  form: FormGroup;

  message = '';

  subscription: Subscription = new Subscription();

  constructor(
    public auth: AuthService,
    public fire: FireService,
    public fb: FormBuilder,
    public router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.onReset();
  }

  checkAuth(data) {
    const uid = data.user.uid;

    this.subscription.add(
      this.auth.fireAuth$
        .pipe(
          switchMap((data) => {
            if (data) {
              return this.fire.getUsersCollectionRef().doc(uid).get();
            }
          })
        )
        .subscribe(
          (data) => {
            if (data) {
              this.store.dispatch(
                login({ userProfile: data.data() as UserDTO })
              );

              this.auth.isLogged = true;
              if (this.auth.isLogged) {
                this.message = 'Logged in. ';
                this.router.navigate(['auth/profile']);
              }
            } else {
              this.message +=
                'User is logged in but no profile data is available. ';
            }
          },
          (err: Error) => {
            this.message = err.message;
          },
          () => {}
        )
    );
  }

  authenticate(email, password) {
    this.auth.login(email, password).then(
      (data) => this.checkAuth(data),
      (err: Error) => {
        this.message = err.message;
      }
    );
  }

  onSubmit(userEmail?: string, userPassword?: string) {
    let email: string = null;
    let password: string = null;
    if (userEmail && userPassword) {
      email = userEmail;
      password = userPassword;
    } else if (this.form.valid) {
      email = this.form.value['email'];
      password = this.form.value['password'];
    }
    if (email && password) {
      this.authenticate(email, password);
    } else {
      this.message = 'Please provide credentials. ';
    }
  }

  initForm() {
    let group = {};

    group['email'] = new FormControl('', [
      Validators.email,
      Validators.required,
    ]);
    group['password'] = new FormControl('', [
      Validators.min(8),
      Validators.required,
    ]);

    this.form = this.fb.group(group);
  }

  onReset(): void {
    this.message = '';
    this.form.reset();
  }
}

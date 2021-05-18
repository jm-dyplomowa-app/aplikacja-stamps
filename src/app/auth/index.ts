import { createSelector } from '@ngrx/store';
import { AppState, AuthState } from '../shared/app-state';
import { UserDTO } from '../shared/models/User';

export const selectAuth = (state: AppState) => state.auth;

export const selectAuthUserProfile = createSelector(
  selectAuth,
  (state: AuthState) => state.userProfile
);

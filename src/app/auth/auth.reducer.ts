import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from '../shared/app-state';

import * as appActions from './auth.actions';

export const featureKey = 'auth';

export const initialAuthState: AuthState = {
  userProfile: null,
};

const authReducer = createReducer(
  initialAuthState,
  on(appActions.login, (state, { userProfile }) => {
    return {
      ...state,
      userProfile,
    };
  }),
  on(appActions.logout, (state) => {
    return {
      ...state,
      userProfile: null,
    };
  }),
  on(appActions.updateAuthUserData, (state, { user }) => {
    return {
      ...state,
      userProfile: user,
    };
  })
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}

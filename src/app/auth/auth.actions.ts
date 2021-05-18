import { createAction, props } from '@ngrx/store';
import { AnyUserDTO, UserDTO } from '../shared/models/User';

export const login = createAction(
  '[Login Page] Load User Profile',
  props<{ userProfile: UserDTO }>()
);

export const logout = createAction('[Profile Page] User Logged Out');

export const updateAuthUserData = createAction(
  '[Promos Public] Update auth user data ',
  props<{ user: AnyUserDTO }>()
);

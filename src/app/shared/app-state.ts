import { AnyUserDTO } from './models/User';

export interface AppState {
  auth: AuthState;
}

export interface AuthState {
  userProfile: AnyUserDTO | null;
}

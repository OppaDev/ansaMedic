import { User } from './user';

export interface AuthToken {
    token: string;
    expiresIn: number;
  }
  
  export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
  }
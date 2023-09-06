import { RequestErrorView, RequestStatus } from "../types";

export interface AuthState {
  requestSignInStatus: RequestStatus;
  errorSignIn: RequestErrorView | null;
  requestSignUpStatus: RequestStatus;
  errorSignUp: RequestErrorView | null;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

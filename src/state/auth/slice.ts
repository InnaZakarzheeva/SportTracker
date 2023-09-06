import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthState,
  SignInPayload,
  SignUpPayload,
  RequestErrorView,
} from "@State";

const SLICE_NAME = "AUTH";

const initialState: AuthState = {
  requestSignInStatus: "idle",
  errorSignIn: null,
  requestSignUpStatus: "idle",
  errorSignUp: null,
};

const authSlice = createSlice({
  name: SLICE_NAME,
  initialState: initialState,
  reducers: {
    signIn: (state, action: PayloadAction<SignInPayload>) => {
      state.requestSignInStatus = "pending";
      state.errorSignIn = null;
    },
    signInSucceeded: state => {
      state.requestSignInStatus = "success";
      state.errorSignIn = null;
    },
    signInFailed: (state, action: PayloadAction<RequestErrorView>) => {
      state.requestSignInStatus = "failure";
      state.errorSignIn = action.payload;
    },
    hideSignInError: state => {
      state.requestSignInStatus = "idle";
      state.errorSignIn = null;
    },

    signUp: (state, action: PayloadAction<SignUpPayload>) => {
      state.requestSignUpStatus = "pending";
      state.errorSignUp = null;
    },
    signUpSucceeded: state => {
      state.requestSignUpStatus = "success";
      state.errorSignUp = null;
    },
    signUpFailed: (state, action: PayloadAction<RequestErrorView>) => {
      state.requestSignUpStatus = "failure";
      state.errorSignUp = action.payload;
    },
    hideSignUpError: state => {
      state.requestSignUpStatus = "idle";
      state.errorSignUp = null;
    },
  },
});

export default authSlice;

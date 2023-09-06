import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";

import ApiManager, { ApiRequestError } from "@Api/ApiManager";
import { AuthResponse } from "@Api/auth/types";
import { signIn, signUp } from "@Api/auth";
import { handleApiError, LocalStorage } from "@Utils";

import navigationSlice from "../navigation/slice";
import authSlice from "./slice";
import { SignInPayload, SignUpPayload } from "./types";
import modalSlice from "@State/modal/slice";

export function* signInSaga(action: PayloadAction<SignInPayload>) {
  const { signInSucceeded, signInFailed } = authSlice.actions;
  const { navigateToMain } = navigationSlice.actions;

  try {
    const data: AuthResponse = yield call(signIn, action.payload);

    yield ApiManager.getInstance().setToken(data.token);
    LocalStorage.set("auth_token", data.token);
    yield put(navigateToMain());
    yield put(signInSucceeded());
  } catch (error) {
    const { showModal } = modalSlice.actions;
    // TODO Need to discuss error response from BE part.

    yield put(showModal("Бекенд ліг поспати"));
    yield handleApiError(error as ApiRequestError, signInFailed);
  }
}

export function* signUpSaga(action: PayloadAction<SignUpPayload>) {
  const { signUpSucceeded, signUpFailed } = authSlice.actions;
  const { navigateToMain } = navigationSlice.actions;

  try {
    const data: AuthResponse = yield call(signUp, action.payload);

    yield ApiManager.getInstance().setToken(data.token);
    LocalStorage.set("auth_token", data.token);
    yield put(navigateToMain());
    yield put(signUpSucceeded());
  } catch (error) {
    yield handleApiError(error as ApiRequestError, signUpFailed);
  }
}

export function* authRootSaga() {
  const { signIn, signUp } = authSlice.actions;

  yield takeLatest(signIn, signInSaga);
  yield takeLatest(signUp, signUpSaga);
}

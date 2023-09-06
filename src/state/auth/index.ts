import Slice from "./slice";
export * from "./types";
export * from "./sagas";

export const { signIn, signUp, hideSignInError, hideSignUpError } =
  Slice.actions;

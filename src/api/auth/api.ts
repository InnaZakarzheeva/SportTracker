import { SignInPayload, SignUpPayload } from "@State/auth";
import ApiManager from "../ApiManager";
import { deserializeAuthResponse } from "./deserializers";

const SIGN_IN = "auth/sign-in";
const SIGN_UP = "auth/sign-up";

export const signIn = async (data: SignInPayload) => {
  const result = await ApiManager.getInstance().post(SIGN_IN, data);

  return deserializeAuthResponse(result.data);
};

export const signUp = async (data: SignUpPayload) => {
  const result = await ApiManager.getInstance().post(SIGN_UP, data);

  return deserializeAuthResponse(result.data);
};

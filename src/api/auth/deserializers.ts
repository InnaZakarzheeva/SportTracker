import { User } from "@State";

import { AuthResponse } from "./types";

export const deserializeAuthResponse = (data: any): AuthResponse => {
  return {
    token: data.tokens.access,
    refreshToken: data.tokens.refresh,
    user: data.user as User,
  };
};

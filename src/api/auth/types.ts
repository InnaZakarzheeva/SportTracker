import { User } from "@State";

export interface AuthResponse {
  token: string;
  refreshToken: string;
  user: User;
}

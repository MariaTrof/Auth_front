import type { User } from "../../../entities/User";

export type AuthResponse = {
  user: User;
  accessToken: string;
  accessTime: number;
};

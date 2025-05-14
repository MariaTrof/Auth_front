import type { User } from "../../../entities/User";

export interface AuthStoreProps {
  isAuth: boolean;
  user: User | null;
  accessToken: string | null;
  accessTime: number | null;
  login: (user: User, accessToken: string, accessTime: number) => void;
  logout: () => void;
}

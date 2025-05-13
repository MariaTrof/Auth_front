export interface User {
  id: number;
  username: string;
  password: string;
}

export type AuthResponse = {
  user: User;
  accessToken: string;
  accessTime: number;
};

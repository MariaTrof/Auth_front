import { ServiceLogin } from "../api/AuthService";
import { useAuthStore } from "../store";


export const useAuth = () => {
  const { isAuth, user, accessToken, login, logout } = useAuthStore();

const handleLogin = async (username: string, password: string) => {
  const { user, accessToken, accessTime } = await ServiceLogin({ username, password });
  login(user, accessToken, accessTime);
  return true;
};

  const handleLogout = () => {
    logout();
  };

  return {
    isAuth,
    user,
    accessToken,
    username: user?.username || "",
    login: handleLogin,
    logout: handleLogout,
  };
};

import { ServiceLogin } from "../../../server/AuthService";
import { useAuthStore } from "../../store/store";

export const useAuth = () => {
  const { isAuth, user, accessToken, login, logout } = useAuthStore();

  const handleLogin = async (username: string, password: string) => {
    try {
      const { user, accessToken, accessTime } = await ServiceLogin({
        username,
        password,
      });
      login(user, accessToken, accessTime);
      return true;
    } catch (error) {
      throw error;
    }
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
